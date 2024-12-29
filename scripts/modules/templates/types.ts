export type PackageJson = {
    name: string;
    version: string;
    description: string;
    keywords: string[];
    homepage: string;
    repository: {
        url: string;
        type: string;
    };
    publishConfig: {
        access: "public" | "restricted";
    };
    dependencies: { [key: string]: string };
    devDependencies: { [key: string]: string };
    scripts: { [key: string]: string };
};
