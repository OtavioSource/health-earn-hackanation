// src/Home.tsx
import Header from "../Header";
import Menu from "../Menu";
import ProfileContent from "../content/ProfileContent";

function ProfilePage() {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <ProfileContent />
                    </div>
    
                </div>
    
            </>
        );
};

export default ProfilePage;
