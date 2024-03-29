import {Suspense, useState} from 'react';
import './styles/index.scss';
import cn from 'classnames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { useTheme } from './providers/themeProvider';
import 'shared/config/i18nConfig/i18n';
import { Modal } from 'shared/ui/Modal/ui/Modal';

const App = () => {
    const { theme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const closeModal = () => {
        console.log('closeModal')
        setIsModalOpen(false)
    }

    return (
        <div className={cn('app', theme)}>
            <Suspense fallback="...перевод">
                <Navbar />
                <button onClick={( ) => setIsModalOpen(!isModalOpen)}>toggle</button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam exercitationem iste repellendus tenetur voluptatem. Ipsa modi omnis provident quibusdam temporibus? Accusantium autem corporis doloribus hic iste quisquam tenetur. Eum, eveniet?
                </Modal>
                <div className="content-page">
                    <AppRouter />
                    <SideBar />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
