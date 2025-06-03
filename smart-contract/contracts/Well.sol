// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;


import "./IWell.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";

/// @title Well Token (WELL) – ERC20 Pausável, Mintável e Burnável
/// @author Otavio Araujo da Silva
/// @notice Token de recompensa da plataforma Health Earn.  
///         **Não há limite máximo de cunhagem**: o owner pode mintar quantos WELL forem necessários para premiar os usuários.
///         O owner também pode queimar tokens que estejam armazenados no próprio contrato (função `burnFromContract`).  
/// @dev    Baseado em OpenZeppelin Contracts v5.3.0.
contract Well is ERC20, Ownable, ERC20Pausable, IWell {
    using SafeERC20 for IERC20;

    /// @dev Erros customizados para economizar gás em validações.
    error MintToZero();
    error MintAmountZero();
    error TokenAddressZero();
    error CannotRecoverWell();
    error TokenAmountZero();
    error BurnAmountZero();
    error BurnFromNotContract();
    error BurnFromAmountZero();

    /// @notice Construtor que cria o token WELL e define o `initialOwner`.
    /// @param initialOwner Endereço que receberá o papel de `owner`.
    /// @dev Inicializa ERC20 com nome e símbolo, e Ownable com `initialOwner`.
    constructor(address initialOwner) ERC20("Well Token", "WELL") Ownable(initialOwner) {
        // Nenhuma lógica adicional no construtor
    }

    /// @notice Cunha novos tokens WELL para um determinado endereço.
    /// @dev Apenas o `owner` pode chamar. Se pausado, reverte por `ERC20Pausable`.
    /// @param to Endereço que receberá os tokens.
    /// @param amount Quantidade de tokens a cunhar (em wei).
    function mint(address to, uint256 amount) public onlyOwner {
        if (to == address(0)) revert MintToZero();
        if (amount == 0) revert MintAmountZero();
        _mint(to, amount);
    }

    /// @notice Transfere a propriedade do contrato para `newOwner`.
    /// @dev `newOwner` não pode ser o address(0). Emite `OwnershipTransferred`.
    /// @param newOwner Endereço do novo proprietário.
    function changeOwner(address newOwner) public onlyOwner {
        transferOwnership(newOwner);
    }

    /// @notice Recupera tokens ERC-20 diferentes de WELL enviados por engano ao contrato.
    /// @dev Usa SafeERC20 para reverter em caso de falha de transferência.
    ///      Impede que WELL seja recuperado. Apenas o `owner` pode chamar.
    /// @param tokenAddress Endereço do token a ser recuperado (não pode ser WELL, nem address(0)).
    /// @param tokenAmount Quantidade de tokens a transferir ao `owner`.
    function recoverERC20(address tokenAddress, uint256 tokenAmount) external onlyOwner {
        if (tokenAddress == address(0)) revert TokenAddressZero();
        if (tokenAddress == address(this)) revert CannotRecoverWell();
        if (tokenAmount == 0) revert TokenAmountZero();
        IERC20(tokenAddress).safeTransfer(owner(), tokenAmount);
    }

    /// @notice Queima tokens WELL da própria conta chamadora.
    /// @dev Se o contrato estiver pausado, a operação reverte por `ERC20Pausable`.
    /// @param amount Quantidade de tokens a queimar (em wei).
    function burn(uint256 amount) public {
        if (amount == 0) revert BurnAmountZero();
        _burn(msg.sender, amount);
    }

    /// @notice Queima tokens WELL que estejam **no próprio contrato** (`address(this)`).
    /// @dev Somente o `owner` pode chamar esta função.  
    ///      Se for passado qualquer outro endereço em `account`, reverterá com `BurnFromNotContract()`.  
    ///      Se o contrato estiver pausado, a operação reverterá em `ERC20Pausable`.
    /// @param account Deve ser sempre `address(this)`.
    /// @param amount  Quantidade de tokens a queimar (em wei).
    function burnFromContract(address account, uint256 amount) external onlyOwner {
        if (account != address(this)) revert BurnFromNotContract();
        if (amount == 0) revert BurnFromAmountZero();
        _burn(account, amount);
    }

    /// @notice Pausa todas as operações de token (transferências, mint, burn).
    /// @dev Somente o `owner` pode chamar. Emite `Paused(owner)`.
    function pause() public onlyOwner {
        _pause();
    }

    /// @notice Despausa o contrato, permitindo operações novamente.
    /// @dev Somente o `owner` pode chamar. Emite `Unpaused(owner)`.
    function unpause() public onlyOwner {
        _unpause();
    }

    /// @notice Hook que controla pausabilidade e lógicas adicionais antes de cada operação de token.
    /// @dev Em OZ v5.3.0, `ERC20._update` é a função base para todas as transfers, mints e burns.
    ///      Ao chamar `super._update`, o `ERC20Pausable` verifica `require(!paused())`.
    /// @param from   Endereço de onde os tokens saem (address(0) em mint).
    /// @param to     Endereço que recebe os tokens (address(0) em burn).
    /// @param amount Quantidade de tokens movida (em wei).
    function _update(address from, address to, uint256 amount)
        internal
        override(ERC20, ERC20Pausable)
    {
        super._update(from, to, amount);
    }
}