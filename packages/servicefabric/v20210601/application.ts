import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The application resource.
 */
export class Application extends pulumi.CustomResource {
    /**
     * Get an existing Application resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Application {
        return new Application(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:servicefabric/v20210601:Application';

    /**
     * Returns true if the given object is an instance of Application.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Application {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Application.__pulumiType;
    }

    /**
     * Azure resource etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * Describes the managed identities for an Azure resource.
     */
    public readonly identity!: pulumi.Output<types.outputs.ManagedIdentityResponse | undefined>;
    /**
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    public readonly managedIdentities!: pulumi.Output<types.outputs.ApplicationUserAssignedIdentityResponse[] | undefined>;
    /**
     * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
     */
    public readonly maximumNodes!: pulumi.Output<number | undefined>;
    /**
     * List of application capacity metric description.
     */
    public readonly metrics!: pulumi.Output<types.outputs.ApplicationMetricDescriptionResponse[] | undefined>;
    /**
     * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
     */
    public readonly minimumNodes!: pulumi.Output<number | undefined>;
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
     * Remove the current application capacity settings.
     */
    public readonly removeApplicationCapacity!: pulumi.Output<boolean | undefined>;
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
     * The application type name as defined in the application manifest.
     */
    public readonly typeName!: pulumi.Output<string | undefined>;
    /**
     * The version of the application type as defined in the application manifest.
     */
    public readonly typeVersion!: pulumi.Output<string | undefined>;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    public readonly upgradePolicy!: pulumi.Output<types.outputs.ApplicationUpgradePolicyResponse | undefined>;

    /**
     * Create a Application resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationArgs, opts?: pulumi.CustomResourceOptions) {
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
            resourceInputs["maximumNodes"] = (args ? args.maximumNodes : undefined) ?? 0;
            resourceInputs["metrics"] = args ? args.metrics : undefined;
            resourceInputs["minimumNodes"] = args ? args.minimumNodes : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["removeApplicationCapacity"] = args ? args.removeApplicationCapacity : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["typeName"] = args ? args.typeName : undefined;
            resourceInputs["typeVersion"] = args ? args.typeVersion : undefined;
            resourceInputs["upgradePolicy"] = args ? (args.upgradePolicy ? pulumi.output(args.upgradePolicy).apply(types.inputs.applicationUpgradePolicyArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["managedIdentities"] = undefined /*out*/;
            resourceInputs["maximumNodes"] = undefined /*out*/;
            resourceInputs["metrics"] = undefined /*out*/;
            resourceInputs["minimumNodes"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["parameters"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["removeApplicationCapacity"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["typeName"] = undefined /*out*/;
            resourceInputs["typeVersion"] = undefined /*out*/;
            resourceInputs["upgradePolicy"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:servicefabric/v20170701preview:Application" }, { type: "azure-native:servicefabric/v20190301:Application" }, { type: "azure-native:servicefabric/v20190301preview:Application" }, { type: "azure-native:servicefabric/v20190601preview:Application" }, { type: "azure-native:servicefabric/v20191101preview:Application" }, { type: "azure-native:servicefabric/v20200301:Application" }, { type: "azure-native:servicefabric/v20201201preview:Application" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Application.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Application resource.
 */
export interface ApplicationArgs {
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
     * It will be deprecated in New API, resource location depends on the parent resource.
     */
    location?: pulumi.Input<string>;
    /**
     * List of user assigned identities for the application, each mapped to a friendly name.
     */
    managedIdentities?: pulumi.Input<pulumi.Input<types.inputs.ApplicationUserAssignedIdentityArgs>[]>;
    /**
     * The maximum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. By default, the value of this property is zero and it means that the services can be placed on any node.
     */
    maximumNodes?: pulumi.Input<number>;
    /**
     * List of application capacity metric description.
     */
    metrics?: pulumi.Input<pulumi.Input<types.inputs.ApplicationMetricDescriptionArgs>[]>;
    /**
     * The minimum number of nodes where Service Fabric will reserve capacity for this application. Note that this does not mean that the services of this application will be placed on all of those nodes. If this property is set to zero, no capacity will be reserved. The value of this property cannot be more than the value of the MaximumNodes property.
     */
    minimumNodes?: pulumi.Input<number>;
    /**
     * List of application parameters with overridden values from their default values specified in the application manifest.
     */
    parameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Remove the current application capacity settings.
     */
    removeApplicationCapacity?: pulumi.Input<boolean>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Azure resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The application type name as defined in the application manifest.
     */
    typeName?: pulumi.Input<string>;
    /**
     * The version of the application type as defined in the application manifest.
     */
    typeVersion?: pulumi.Input<string>;
    /**
     * Describes the policy for a monitored application upgrade.
     */
    upgradePolicy?: pulumi.Input<types.inputs.ApplicationUpgradePolicyArgs>;
}
