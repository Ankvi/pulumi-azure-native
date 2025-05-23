import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The application resource.
 *
 * Uses Azure REST API version 2024-04-01. In version 2.x of the Azure Native provider, it used API version 2023-03-01-preview.
 *
 * Other available API versions: 2023-03-01-preview, 2023-07-01-preview, 2023-09-01-preview, 2023-11-01-preview, 2023-12-01-preview, 2024-02-01-preview, 2024-06-01-preview, 2024-09-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native servicefabric [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ManagedClusterApplication extends pulumi.CustomResource {
    /**
     * Get an existing ManagedClusterApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ManagedClusterApplication {
        return new ManagedClusterApplication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric:ManagedClusterApplication';

    /**
     * Returns true if the given object is an instance of ManagedClusterApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagedClusterApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagedClusterApplication.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedIdentityResponse | undefined>;
    /**
     * Resource location depends on the parent resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    public readonly managedIdentities!: pulumi.Output<types.outputs.ApplicationUserAssignedIdentityResponse[] | undefined>;
    /**
     * Azure resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    public readonly parameters!: pulumi.Output<{[key: string]: string} | undefined>;
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
     * Describes the policy for a monitored application upgrade.
     */
    public readonly upgradePolicy!: pulumi.Output<types.outputs.ApplicationUpgradePolicyResponse | undefined>;
    /**
     * The version of the application type as defined in the application manifest.
     * This name must be the full Arm Resource ID for the referenced application type version.
     */
    public readonly version!: pulumi.Output<string | undefined>;

    /**
     * Create a ManagedClusterApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ManagedClusterApplicationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.clusterName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["applicationName"] = args ? args.applicationName : undefined;
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["managedIdentities"] = args ? args.managedIdentities : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["upgradePolicy"] = args ? args.upgradePolicy : undefined;
            resourceInputs["version"] = args ? args.version : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentities"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["upgradePolicy"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20210101preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20210501:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20210701preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20210901privatepreview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20211101preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20220101:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20220201preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20220601preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20220801preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20221001preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20230201preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20230301preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20230701preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20230901preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20231101preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20231201preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240201preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240401:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240601preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20240901preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20241101preview:ManagedClusterApplication" }, { type: "azure-native:servicefabric/v20250301preview:ManagedClusterApplication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ManagedClusterApplication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ManagedClusterApplication resource.
 */
export interface ManagedClusterApplicationArgs {
    /**
     * The name of the application resource.
     */
    applicationName?: pulumi.Input<string>;
    /**
     * The name of the cluster resource.
     */
    clusterName: pulumi.Input<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    identity?: pulumi.Input<types.inputs.ManagedIdentityArgs>;
    /**
     * Resource location depends on the parent resource.
     */
    location?: pulumi.Input<string>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    managedIdentities?: pulumi.Input<pulumi.Input<types.inputs.ApplicationUserAssignedIdentityArgs>[]>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    upgradePolicy?: pulumi.Input<types.inputs.ApplicationUpgradePolicyArgs>;
    /**
     * The version of the application type as defined in the application manifest.
     * This name must be the full Arm Resource ID for the referenced application type version.
     */
    version?: pulumi.Input<string>;
}