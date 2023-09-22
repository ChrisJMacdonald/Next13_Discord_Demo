import { FC } from "react";
interface IAuthLayoutProps { 
    children: React.ReactNode
};

const AuthLayout: FC<IAuthLayoutProps> = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default AuthLayout;