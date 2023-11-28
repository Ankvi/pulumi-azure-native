import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An object that represents a archive for a container registry.
 * Azure REST API version: 2023-06-01-preview.
 *
 * Other available API versions: 2023-08-01-preview, 2023-11-01-preview.
 */
export class Archife extends pulumi.CustomResource {
    /**
     * Get an existing Archife resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Archife {
        return new Archife(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:containerregistry:Archife';

    /**
     * Returns true if the given object is an instance of Archife.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Archife {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Archife.__pulumiType;
    }

    /**
     * The name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The package source of the archive.
     */
    public readonly packageSource!: pulumi.Output<types.outputs.ArchivePackageSourcePropertiesResponse | undefined>;
    /**
     * The provisioning state of the archive at the time the operation was called.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The published version of the archive.
     */
    public readonly publishedVersion!: pulumi.Output<string | undefined>;
    public /*out*/ readonly repositoryEndpoint!: pulumi.Output<string>;
    public readonly repositoryEndpointPrefix!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Archife resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ArchifeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
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
            resourceInputs["packageSource"] = args ? args.packageSource : undefined;
            resourceInputs["packageType"] = args ? args.packageType : undefined;
            resourceInputs["publishedVersion"] = args ? args.publishedVersion : undefined;
            resourceInputs["registryName"] = args ? args.registryName : undefined;
            resourceInputs["repositoryEndpointPrefix"] = args ? args.repositoryEndpointPrefix : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["repositoryEndpoint"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["packageSource"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["publishedVersion"] = undefined /*out*/;
            resourceInputs["repositoryEndpoint"] = undefined /*out*/;
            resourceInputs["repositoryEndpointPrefix"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:containerregistry/v20230601preview:Archife" }, { type: "azure-native:containerregistry/v20230801preview:Archife" }, { type: "azure-native:containerregistry/v20231101preview:Archife" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Archife.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Archife resource.
 */
export interface ArchifeArgs {
    /**
     * The name of the archive resource.
     */
    archiveName?: pulumi.Input<string>;
    /**
     * The package source of the archive.
     */
    packageSource?: pulumi.Input<types.inputs.ArchivePackageSourcePropertiesArgs>;
    /**
     * The type of the package resource.
     */
    packageType: pulumi.Input<string>;
    /**
     * The published version of the archive.
     */
    publishedVersion?: pulumi.Input<string>;
    /**
     * The name of the container registry.
     */
    registryName: pulumi.Input<string>;
    repositoryEndpointPrefix?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
}
