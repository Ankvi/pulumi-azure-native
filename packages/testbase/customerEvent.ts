import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * The Customer Notification Event resource.
 *
 * Uses Azure REST API version 2022-04-01-preview. In version 1.x of the Azure Native provider, it used API version 2022-04-01-preview.
 *
 * Other available API versions: 2023-11-01-preview.
 */
export class CustomerEvent extends pulumi.CustomResource {
    /**
     * Get an existing CustomerEvent resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): CustomerEvent {
        return new CustomerEvent(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:testbase:CustomerEvent';

    /**
     * Returns true if the given object is an instance of CustomerEvent.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CustomerEvent {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CustomerEvent.__pulumiType;
    }

    /**
     * The name of the event subscribed to.
     */
    public readonly eventName!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The notification event receivers.
     */
    public readonly receivers!: pulumi.Output<types.outputs.NotificationEventReceiverResponse[]>;
    /**
     * The system metadata relating to this resource
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a CustomerEvent resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CustomerEventArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.eventName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventName'");
            }
            if ((!args || args.receivers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'receivers'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.testBaseAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'testBaseAccountName'");
            }
            resourceInputs["customerEventName"] = args ? args.customerEventName : undefined;
            resourceInputs["eventName"] = args ? args.eventName : undefined;
            resourceInputs["receivers"] = args ? args.receivers : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["testBaseAccountName"] = args ? args.testBaseAccountName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["eventName"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["receivers"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:testbase/v20201216preview:CustomerEvent" }, { type: "azure-native:testbase/v20220401preview:CustomerEvent" }, { type: "azure-native:testbase/v20231101preview:CustomerEvent" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(CustomerEvent.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a CustomerEvent resource.
 */
export interface CustomerEventArgs {
    /**
     * The resource name of the Test Base Customer event.
     */
    customerEventName?: pulumi.Input<string>;
    /**
     * The name of the event subscribed to.
     */
    eventName: pulumi.Input<string>;
    /**
     * The notification event receivers.
     */
    receivers: pulumi.Input<pulumi.Input<types.inputs.NotificationEventReceiverArgs>[]>;
    /**
     * The name of the resource group that contains the resource.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource name of the Test Base Account.
     */
    testBaseAccountName: pulumi.Input<string>;
}