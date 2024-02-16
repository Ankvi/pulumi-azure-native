import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * IoT Connector definition.
 * Azure REST API version: 2023-02-28. Prior API version in Azure Native 1.x: 2022-05-15.
 *
 * Other available API versions: 2023-09-06, 2023-11-01, 2023-12-01.
 */
export class IotConnector extends pulumi.CustomResource {
    /**
     * Get an existing IotConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotConnector {
        return new IotConnector(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:healthcareapis:IotConnector';

    /**
     * Returns true if the given object is an instance of IotConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotConnector.__pulumiType;
    }

    /**
     * Device Mappings.
     */
    public readonly deviceMapping!: pulumi.Output<types.outputs.IotMappingPropertiesResponse | undefined>;
    /**
     * An etag associated with the resource, used for optimistic concurrency when editing it.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    public readonly identity!: pulumi.Output<types.outputs.ServiceManagedIdentityResponseIdentity | undefined>;
    /**
     * Source configuration.
     */
    public readonly ingestionEndpointConfiguration!: pulumi.Output<types.outputs.IotEventHubIngestionEndpointConfigurationResponse | undefined>;
    /**
     * The resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The provisioning state.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IotConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotConnectorArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.workspaceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspaceName'");
            }
            resourceInputs["deviceMapping"] = args ? args.deviceMapping : undefined;
            resourceInputs["identity"] = args ? args.identity : undefined;
            resourceInputs["ingestionEndpointConfiguration"] = args ? args.ingestionEndpointConfiguration : undefined;
            resourceInputs["iotConnectorName"] = args ? args.iotConnectorName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["workspaceName"] = args ? args.workspaceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["deviceMapping"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["identity"] = undefined /*out*/;
            resourceInputs["ingestionEndpointConfiguration"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:healthcareapis/v20210601preview:IotConnector" }, { type: "azure-native:healthcareapis/v20211101:IotConnector" }, { type: "azure-native:healthcareapis/v20220131preview:IotConnector" }, { type: "azure-native:healthcareapis/v20220515:IotConnector" }, { type: "azure-native:healthcareapis/v20220601:IotConnector" }, { type: "azure-native:healthcareapis/v20221001preview:IotConnector" }, { type: "azure-native:healthcareapis/v20221201:IotConnector" }, { type: "azure-native:healthcareapis/v20230228:IotConnector" }, { type: "azure-native:healthcareapis/v20230906:IotConnector" }, { type: "azure-native:healthcareapis/v20231101:IotConnector" }, { type: "azure-native:healthcareapis/v20231201:IotConnector" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotConnector.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotConnector resource.
 */
export interface IotConnectorArgs {
    /**
     * Device Mappings.
     */
    deviceMapping?: pulumi.Input<types.inputs.IotMappingPropertiesArgs>;
    /**
     * Setting indicating whether the service has a managed identity associated with it.
     */
    identity?: pulumi.Input<types.inputs.ServiceManagedIdentityIdentityArgs>;
    /**
     * Source configuration.
     */
    ingestionEndpointConfiguration?: pulumi.Input<types.inputs.IotEventHubIngestionEndpointConfigurationArgs>;
    /**
     * The name of IoT Connector resource.
     */
    iotConnectorName?: pulumi.Input<string>;
    /**
     * The resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the service instance.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of workspace resource.
     */
    workspaceName: pulumi.Input<string>;
}