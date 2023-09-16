import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents an export pipeline for a container registry.
 * Azure REST API version: 2023-06-01-preview.
 */
export class ArchiveVersion extends pulumi.CustomResource {
    /**
     * Get an existing ArchiveVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ArchiveVersion {
        return new ArchiveVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry:ArchiveVersion';

    /**
     * Returns true if the given object is an instance of ArchiveVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ArchiveVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ArchiveVersion.__pulumiType;
    }

    /**
     * The detailed error message for the archive version in the case of failure.
     */
    public /*out*/ readonly archiveVersionErrorMessage!: pulumi.Output<string | undefined>;
    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state of the archive at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.containerregistry.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ArchiveVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArchiveVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.archiveName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'archiveName'");
            }
            if ((!args || args.packageType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'packageType'");
            }
            if ((!args || args.registryName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registryName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["archiveName"] = args ? args.archiveName : undefined;
            resourceInputs["archiveVersionName"] = args ? args.archiveVersionName : undefined;
            resourceInputs["packageType"] = args ? args.packageType : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["archiveVersionErrorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["archiveVersionErrorMessage"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry/v20230601preview:ArchiveVersion" }, { type: "azure-native:containerregistry/v20230801preview:ArchiveVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ArchiveVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ArchiveVersion resource.
 */
export interface ArchiveVersionArgs {
    /**
     * The name of the archive resource.
     */
    archiveName: pulumi.Input<string>;
    /**
     * The name of the archive version resource.
     */
    archiveVersionName?: pulumi.Input<string>;
    /**
     * The type of the package resource.
     */
    packageType: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
