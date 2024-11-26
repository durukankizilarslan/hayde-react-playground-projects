import { Menu } from 'primereact/menu';
import HaydesoftLogo from '../images/Haydesoft_Logo.png';

function SideMenu({isOpen}) {



    const items = [
        {
            label: 'Ana İşlemler',
            items: [
                {
                    label: 'Personel Kayıt',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Hesap Ayarları',
            items: [
                {
                    label: 'Ayarlar',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Yardım',
                    icon: 'pi pi-sign-out'
                },
                {
                    label: 'Çıkış',
                    icon: 'pi pi-sign-out'
                },
            ]
        }
    ];

    return(
<aside className={`d-flex flex-column bg-white layout-sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}> 

    {/* Logo */}
    <div className="w-100 sidebar-logo-wrapper">
        <img className=" mx-auto d-block p-4" src={HaydesoftLogo} alt="Company Logo" />
    </div>
    
    {/* <p>{isOpen ? 'Sidebar is open' : 'Sidebar is closed'}</p> */}
    {/* Menu */}
    <div className="sidebar-menu-wrapper">
    <Menu model={items} className="w-100 border border-0 bg-transparent"></Menu>
    </div>

</aside>
    );
}

export default SideMenu;