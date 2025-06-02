import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { UserProvider } from "./UserContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import OverviewPage from './OverviewPage'
import ProfilePage from './ProfilePage'
import SettingsPage from './SettingsPage.tsx'
import HelpChatPage from './HelpChatPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/help-chat" element={<HelpChatPage />} />
          {/* Adicione outras rotas aqui */}
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)
