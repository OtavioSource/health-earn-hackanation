// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IWell {
    /// @notice Cunha WELL para premiar usuários.
    /// @param to Endereço que receberá os tokens.
    /// @param amount Quantidade a cunhar (em wei).
    function mint(address to, uint256 amount) external;

    /// @notice Queima WELL do próprio chamador.
    /// @param amount Quantidade a queimar (em wei).
    function burn(uint256 amount) external;

    /// @notice Queima WELL que estão no próprio contrato (address(this)).
    /// @param account Deve ser sempre `address(this)`.
    /// @param amount  Quantidade a queimar (em wei).
    function burnFromContract(address account, uint256 amount) external;

    /// @notice Pausa todas as operações de token.
    function pause() external;

    /// @notice Despausa o contrato de token.
    function unpause() external;

    /// @notice Recupera tokens ERC-20 de outro tipo que estejam no contrato.
    /// @param tokenAddress Endereço do token a recuperar.
    /// @param tokenAmount Quantidade a recuperar.
    function recoverERC20(address tokenAddress, uint256 tokenAmount) external;
}