import type { ReactNode } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: ReactNode;
  subtitle?: string;
  description?: string;
  title?: string;
  isHeader?: boolean;
  src?: string
  className?: string
}

const AuthLayout = ({
  children,
  subtitle = "Log in to Authenticate Super Mondays Diners",
  description = "Effortlessly Streamline Your Management",
  isHeader = false,
  src= "/images/restaurant-food-table.png",
  className = ""
}: AuthLayoutProps) => {
  return (
    <div className="flex h-screen w-full p-8">
      {/* Left side - Image */}
      <div className="px-8 h-full w-1/2 xl:w-2/5 hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt="Restaurant table with food"
            fill
            // className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="h-full flex flex-col w-full lg:w-1/2 xl:w-3/5 lg:px-20 my-auto  overflow-y-auto">
        {isHeader && (
          <h1 className="text-xl md:text-3xl font-bold ml-auto font-el-messiri">
            <span className="text-black">RESTAURANT-</span>
            <span className="text-primary">PARTNERS</span>
            <span className="text-black"> DASHBOARD</span>
          </h1>
        )}
        <div className={`max-w-[550px] w-full my-auto py-10 md:py-14 ${className}`}>
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-2 font-poppins">
              {subtitle}
            </h2>
            <p className="text-Gray600 text-sm font-poppins">{description}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
