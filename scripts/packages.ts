import { readdir } from "node:fs/promises";
import * as path from "node:path";
import { PACKAGES_DIRECTORY } from "./constants";
import { PackageJson } from "./types";

export async function getPackageFolderNames(): Promise<string[]> {
    const packages = await getPackageInfos();
    return packages.map(p => path.dirname(p.path));
}

export type PackageInfo = {
    name: string;
    path: string;
    version: string;
}

export async function getPackageInfos(): Promise<PackageInfo[]> {
    const dirents = await readdir(PACKAGES_DIRECTORY, {
        withFileTypes: true
    });

    const folders = dirents.filter(dirent => dirent.isDirectory() && dirent.name != "node_modules");

    const packages = await Promise.all<PackageInfo>(folders.map<Promise<PackageInfo>>(async (folder) => {
        const folderPath = path.resolve(PACKAGES_DIRECTORY, folder.name);
        const filePath = path.resolve(folderPath, "package.json");
        const file = await Bun.file(filePath, { type: "application/json" }).json<PackageJson>();

        if (!file.name) {
            throw new Error(`File with path "${filePath}" is not a JSON file with a "name" field`);
        }

        return {
            name: file.name,
            version: file.version,
            path: folderPath
        };
    }));

    return packages.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
}

export async function getPackageNames(): Promise<string[]> {
    const packages = await getPackageInfos();
    return packages.map(p => p.name);
}
