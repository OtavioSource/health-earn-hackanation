// src/Home.tsx
import Header from "./Header";
import Menu from "./Menu";
import SettingsContent from "./SettingsContent";

function SettingsPage() {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <SettingsContent />
                    </div>
    
                </div>
    
            </>
        );
};

export default SettingsPage;
