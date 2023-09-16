import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
// Export members:
export { ListManagedClusterAccessProfileArgs, ListManagedClusterAccessProfileResult, ListManagedClusterAccessProfileOutputArgs } from "./listManagedClusterAccessProfile";
export const listManagedClusterAccessProfile: typeof import("./listManagedClusterAccessProfile").listManagedClusterAccessProfile = null as any;
export const listManagedClusterAccessProfileOutput: typeof import("./listManagedClusterAccessProfile").listManagedClusterAccessProfileOutput = null as any;
utilities.lazyLoad(exports, ["listManagedClusterAccessProfile","listManagedClusterAccessProfileOutput"], () => require("./listManagedClusterAccessProfile"));

