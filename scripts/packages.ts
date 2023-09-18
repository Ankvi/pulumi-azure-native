import { readdir } from "node:fs/promises";

export async function getPackageNames(): Promise<string[]> {
    const dirents = await readdir(`${import.meta.dir}/../packages`, {
        withFileTypes: true
    });

    const folders = dirents.filter(dirent => dirent.isDirectory() && dirent.name != "node_modules");

    const packageNames = await Promise.all(folders.map(async (folder) => {
        const filePath = `${import.meta.dir}/../packages/${folder.name}/package.json`;
        const file = await Bun.file(filePath, { type: "application/json" }).json();
        const name = file.name;

        if (!name) {
            throw new Error(`File with path "${filePath}" is not a JSON file with a "name" field`);
        }

        return name;
    }));

    return packageNames.sort();
}
