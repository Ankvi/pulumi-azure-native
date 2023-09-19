import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The properties of the EventHubConsumerGroupInfo object.
 */
export class IotHubResourceEventHubConsumerGroup extends pulumi.CustomResource {
    /**
     * Get an existing IotHubResourceEventHubConsumerGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): IotHubResourceEventHubConsumerGroup {
        return new IotHubResourceEventHubConsumerGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:devices/v20230630:IotHubResourceEventHubConsumerGroup';

    /**
     * Returns true if the given object is an instance of IotHubResourceEventHubConsumerGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotHubResourceEventHubConsumerGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotHubResourceEventHubConsumerGroup.__pulumiType;
    }

    /**
     * The etag.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * The Event Hub-compatible consumer group name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The tags.
     */
    public readonly properties!: pulumi.Output<any>;
    /**
     * the resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a IotHubResourceEventHubConsumerGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotHubResourceEventHubConsumerGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.eventHubEndpointName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventHubEndpointName'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.resourceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceName'");
            }
            resourceInputs["eventHubEndpointName"] = args ? args.eventHubEndpointName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceName"] = args ? args.resourceName : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:devices:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20160203:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20170119:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20170701:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20180122:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20180401:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20181201preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20190322:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20190322preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20190701preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20191104:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200301:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200401:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200615:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200710preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200801:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200831:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20200831preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210201preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210303preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210331:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210701:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210701preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210702:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20210702preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20220430preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20221115preview:IotHubResourceEventHubConsumerGroup" }, { type: "azure-native:devices/v20230630preview:IotHubResourceEventHubConsumerGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(IotHubResourceEventHubConsumerGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a IotHubResourceEventHubConsumerGroup resource.
 */
export interface IotHubResourceEventHubConsumerGroupArgs {
    /**
     * The name of the Event Hub-compatible endpoint in the IoT hub.
     */
    eventHubEndpointName: pulumi.Input<string>;
    /**
     * The name of the consumer group to add.
     */
    name?: pulumi.Input<string>;
    /**
     * The EventHub consumer group name.
     */
    properties: pulumi.Input<types.inputs.EventHubConsumerGroupNameArgs>;
    /**
     * The name of the resource group that contains the IoT hub.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the IoT hub.
     */
    resourceName: pulumi.Input<string>;
}
