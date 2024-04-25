import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * An environment for Kubernetes cluster specialized for web workloads by Azure App Service
 * Azure REST API version: 2022-10-01.
 *
 * Other available API versions: 2023-04-01-preview, 2023-05-01, 2023-05-02-preview, 2023-08-01-preview, 2023-11-02-preview, 2024-03-01.
 */
export class ConnectedEnvironment extends pulumi.CustomResource {
    /**
     * Get an existing ConnectedEnvironment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ConnectedEnvironment {
        return new ConnectedEnvironment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:app:ConnectedEnvironment';

    /**
     * Returns true if the given object is an instance of ConnectedEnvironment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConnectedEnvironment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConnectedEnvironment.__pulumiType;
    }

    /**
     * Custom domain configuration for the environment
     */
    public readonly customDomainConfiguration!: pulumi.Output<types.outputs.CustomDomainConfigurationResponse | undefined>;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    public readonly daprAIConnectionString!: pulumi.Output<string | undefined>;
    /**
     * Default Domain Name for the cluster
     */
    public /*out*/ readonly defaultDomain!: pulumi.Output<string>;
    /**
     * Any errors that occurred during deployment or deployment validation
     */
    public /*out*/ readonly deploymentErrors!: pulumi.Output<string>;
    /**
     * The complex type of the extended location.
     */
    public readonly extendedLocation!: pulumi.Output<types.outputs.ExtendedLocationResponse | undefined>;
    /**
     * The geo-location where the resource lives
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the Kubernetes Environment.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Static IP of the connectedEnvironment
     */
    public readonly staticIp!: pulumi.Output<string | undefined>;
    /**
     * Azure Resource Manager metadata containing createdBy and modifiedBy information.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ConnectedEnvironment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ConnectedEnvironmentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["connectedEnvironmentName"] = args ? args.connectedEnvironmentName : undefined;
            resourceInputs["customDomainConfiguration"] = args ? args.customDomainConfiguration : undefined;
            resourceInputs["daprAIConnectionString"] = args ? args.daprAIConnectionString : undefined;
            resourceInputs["extendedLocation"] = args ? args.extendedLocation : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["staticIp"] = args ? args.staticIp : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["defaultDomain"] = undefined /*out*/;
            resourceInputs["deploymentErrors"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["customDomainConfiguration"] = undefined /*out*/;
            resourceInputs["daprAIConnectionString"] = undefined /*out*/;
            resourceInputs["defaultDomain"] = undefined /*out*/;
            resourceInputs["deploymentErrors"] = undefined /*out*/;
            resourceInputs["extendedLocation"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["staticIp"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:app/v20220601preview:ConnectedEnvironment" }, { type: "azure-native:app/v20221001:ConnectedEnvironment" }, { type: "azure-native:app/v20221101preview:ConnectedEnvironment" }, { type: "azure-native:app/v20230401preview:ConnectedEnvironment" }, { type: "azure-native:app/v20230501:ConnectedEnvironment" }, { type: "azure-native:app/v20230502preview:ConnectedEnvironment" }, { type: "azure-native:app/v20230801preview:ConnectedEnvironment" }, { type: "azure-native:app/v20231102preview:ConnectedEnvironment" }, { type: "azure-native:app/v20240301:ConnectedEnvironment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ConnectedEnvironment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ConnectedEnvironment resource.
 */
export interface ConnectedEnvironmentArgs {
    /**
     * Name of the connectedEnvironment.
     */
    connectedEnvironmentName?: pulumi.Input<string>;
    /**
     * Custom domain configuration for the environment
     */
    customDomainConfiguration?: pulumi.Input<types.inputs.CustomDomainConfigurationArgs>;
    /**
     * Application Insights connection string used by Dapr to export Service to Service communication telemetry
     */
    daprAIConnectionString?: pulumi.Input<string>;
    /**
     * The complex type of the extended location.
     */
    extendedLocation?: pulumi.Input<types.inputs.ExtendedLocationArgs>;
    /**
     * The geo-location where the resource lives
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Static IP of the connectedEnvironment
     */
    staticIp?: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}