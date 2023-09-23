import { FC } from "react";
interface IAuthLayoutProps { 
    children: React.ReactNode
};

const AuthLayout: FC<IAuthLayoutProps> = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
    );
}

export default AuthLayout;