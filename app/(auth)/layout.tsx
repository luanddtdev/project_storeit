import Image from "next/image"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex">
            <section className="xl:w-2/5 w-1/2 p-10 bg-brand lg:flex hidden justify-center items-center">
                <div className="max-w-[430px] max-h-[800px] flex flex-col items-center gap-12">
                    <div className="w-full">
                        <Image
                            src="/assets/icons/logo-full.svg"
                            alt="storeit"
                            width={224}
                            height={82}
                            className="object-contain"
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h1 className="h1 text-white">
                            Manage your files the best way
                        </h1>

                        <p className="body-1 text-white">
                            Awesome, we&#39;ve created the perfect place for you to store all your documents.
                        </p>
                    </div>

                    <Image
                        src="/assets/images/files.png"
                        alt="files"
                        width={342}
                        height={342}
                        className="object-contain transition-all hover:rotate-2 hover:scale-105"
                    />
                </div>
            </section>

            <section className="lg:px-10 px-4 lg:py-0 py-10 flex flex-1 flex-col lg:justify-center items-center gap-16">
                <Image
                    src="/assets/icons/logo-full-brand.svg"
                    alt="storeit"
                    width={224}
                    height={82}
                    className="object-contain lg:hidden"
                />

                {children}
            </section>
        </div>
    )
}

export default AuthLayout