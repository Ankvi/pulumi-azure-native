import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An application type version resource for the specified application type name resource.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-06-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ManagedClusterApplicationTypeVersion extends pulumi.CustomResource {
    /**
     * Get an existing ManagedClusterApplicationTypeVersion resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedClusterApplicationTypeVersion {
        return new ManagedClusterApplicationTypeVersion(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric:ManagedClusterApplicationTypeVersion';

    /**
     * Returns true if the given object is an instance of ManagedClusterApplicationTypeVersion.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedClusterApplicationTypeVersion {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedClusterApplicationTypeVersion.__pulumiType;
    }

    /**
     * The URL to the application package
     */
    public readonly appPackageUrl!: pulumi.Output<string>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource location depends on the parent resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The current deployment or provisioning state, which only appears in the response
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Azure resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Azure resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ManagedClusterApplicationTypeVersion resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterApplicationTypeVersionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.appPackageUrl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'appPackageUrl'");
            }
            if ((!args || args.applicationTypeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'applicationTypeName'");
            }
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["appPackageUrl"] = args ? args.appPackageUrl : undefined;
            resourceInputs["applicationTypeName"] = args ? args.applicationTypeName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["appPackageUrl"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20210101preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20210501:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20210701preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20210901privatepreview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20211101preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20220101:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20220201preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20220601preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20220801preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20221001preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20230201preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20230301preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20230701preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20230901preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20231101preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20231201preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20240201preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20240401:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20240601preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20240901preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20241101preview:ManagedClusterApplicationTypeVersion" }, { type: "azure-native:servicefabric/v20250301preview:ManagedClusterApplicationTypeVersion" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedClusterApplicationTypeVersion.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedClusterApplicationTypeVersion resource.
 */
export interface ManagedClusterApplicationTypeVersionArgs {
    /**
     * The URL to the application package
     */
    appPackageUrl: pulumi.Input<string>;
    /**
     * The name of the application type name resource.
     */
    applicationTypeName: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Resource location depends on the parent resource.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The application type version.
     */
    version?: pulumi.Input<string>;
}