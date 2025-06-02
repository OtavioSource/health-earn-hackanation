// src/Home.tsx
import Header from "./Header";
import Menu from "./Menu";
import HelpChatContent from "./HelpChatContent";

function HelpChatPage() {
        return (
            <>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Menu />
                        <HelpChatContent />
                    </div>
    
                </div>
    
            </>
        );
};

export default HelpChatPage;
