import { PackageInfo } from "./packages";

export class SkippedError extends Error {}

const skippedMessage = "There are no new packages that should be published";
const cwd = `${import.meta.dir}/..`;

export async function dryRun(pkg: PackageInfo) {
    const proc = Bun.spawn(["pnpm", "--filter", pkg.name, "publish", "--dry-run", "--no-git-checks"]);
    const response = await new Response(proc.stdout).text();
    if (response.startsWith(skippedMessage)) {
        throw new SkippedError();
    }
}

export async function build(pkg: PackageInfo) {
    const proc = Bun.spawn(["pnpm", "--filter", pkg.name, "build"], {
        stderr: "pipe",
        cwd
    });
    if (await proc.exited) {
        const error = await new Response(proc.stderr).text();
        throw new Error(`Build for ${pkg.name} failed with error: ${error}`);
    }
}

export async function publish(pkg: PackageInfo): Promise<boolean> {
    const proc = Bun.spawn(["pnpm", "--filter", pkg.name, "publish"], {
        stderr: "pipe",
        cwd
    });
    if (await proc.exited) {
        const error = await new Response(proc.stderr).text();
        throw new Error(`Publishing ${pkg.name} failed with error: ${error}`);
    }

    const response = await new Response(proc.stdout).text();

    if (response === skippedMessage) {
        throw new SkippedError();
    } else if (response.includes(`+ ${pkg.name}${pkg.version}`)) {
        return true;
    } else {
        throw new Error(`Unknown publish output for ${pkg.name}:\n${response}`);
    }
}
