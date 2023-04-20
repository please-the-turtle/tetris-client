import './Sidebar.scss';

export default function Sidebar({ children, toggle }) {
    return (
        <div className={toggle.state ? 'sidebar active' : 'sidebar'}
            onClick={() => toggle.toggle()}>
                {children}
        </div>
    )
}