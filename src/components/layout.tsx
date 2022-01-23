import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";
// import { useAuth } from "src/auth/useAuth";

interface IProps {
  main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
  const authenticated = false;
  const logout = () => {};
  const navHeight = "64px";
  return (
    <div className="bg-gray-900 max-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800 " style={{ height: navHeight }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img
                src="/home-color.svg"
                alt="home house"
                className="inline w-16"
              />
            </a>
          </Link>
          {authenticated ? (
            <>
              {" "}
              <Link href="/houses/add">
                <a>Add house</a>
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/auth">Login / Signup</Link>
          )}
        </div>
      </nav>
      <main style={{ minHeight: `calc(100vh - ${navHeight})` }}>{main}</main>
    </div>
  );
};

export default Layout;
