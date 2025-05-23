import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Linked Subscription information.
 *
 * Uses Azure REST API version 2020-06-01-preview. In version 2.x of the Azure Native provider, it used API version 2020-06-01-preview.
 */
export class LinkedSubscription extends pulumi.CustomResource {
    /**
     * Get an existing LinkedSubscription resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): LinkedSubscription {
        return new LinkedSubscription(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:azurestack:LinkedSubscription';

    /**
     * Returns true if the given object is an instance of LinkedSubscription.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LinkedSubscription {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LinkedSubscription.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * The status of the remote management connection of the Azure Stack device.
     */
    public /*out*/ readonly deviceConnectionStatus!: pulumi.Output<string>;
    /**
     * The identifier of the Azure Stack device for remote management.
     */
    public /*out*/ readonly deviceId!: pulumi.Output<string>;
    /**
     * The connection state of the Azure Stack device.
     */
    public /*out*/ readonly deviceLinkState!: pulumi.Output<string>;
    /**
     * The object identifier associated with the Azure Stack device connecting to Azure.
     */
    public /*out*/ readonly deviceObjectId!: pulumi.Output<string>;
    /**
     * The entity tag used for optimistic concurrency when modifying the resource.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * The kind of the resource.
     */
    public /*out*/ readonly kind!: pulumi.Output<string>;
    /**
     * The last remote management connection time for the Azure Stack device connected to the linked subscription resource.
     */
    public /*out*/ readonly lastConnectedTime!: pulumi.Output<string>;
    /**
     * The identifier associated with the device subscription.
     */
    public readonly linkedSubscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Location of the resource.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * The identifier associated with the device registration.
     */
    public readonly registrationResourceId!: pulumi.Output<string | undefined>;
    /**
     * Metadata pertaining to creation and last modification of the resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Custom tags for the resource.
     */
    public /*out*/ readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Type of Resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a LinkedSubscription resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LinkedSubscriptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.linkedSubscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'linkedSubscriptionId'");
            }
            if ((!args || args.registrationResourceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'registrationResourceId'");
            }
            if ((!args || args.resourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroup'");
            }
            resourceInputs["linkedSubscriptionId"] = args ? args.linkedSubscriptionId : undefined;
            resourceInputs["linkedSubscriptionName"] = args ? args.linkedSubscriptionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["registrationResourceId"] = args ? args.registrationResourceId : undefined;
            resourceInputs["resourceGroup"] = args ? args.resourceGroup : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deviceConnectionStatus"] = undefined /*out*/;
            resourceInputs["deviceId"] = undefined /*out*/;
            resourceInputs["deviceLinkState"] = undefined /*out*/;
            resourceInputs["deviceObjectId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastConnectedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["deviceConnectionStatus"] = undefined /*out*/;
            resourceInputs["deviceId"] = undefined /*out*/;
            resourceInputs["deviceLinkState"] = undefined /*out*/;
            resourceInputs["deviceObjectId"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["lastConnectedTime"] = undefined /*out*/;
            resourceInputs["linkedSubscriptionId"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["registrationResourceId"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:azurestack/v20200601preview:LinkedSubscription" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(LinkedSubscription.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a LinkedSubscription resource.
 */
export interface LinkedSubscriptionArgs {
    /**
     * The identifier associated with the device subscription.
     */
    linkedSubscriptionId: pulumi.Input<string>;
    /**
     * Name of the Linked Subscription resource.
     */
    linkedSubscriptionName?: pulumi.Input<string>;
    /**
     * Location of the resource.
     */
    location?: pulumi.Input<string | types.enums.Location>;
    /**
     * The identifier associated with the device registration.
     */
    registrationResourceId: pulumi.Input<string>;
    /**
     * Name of the resource group.
     */
    resourceGroup: pulumi.Input<string>;
}