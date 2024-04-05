import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Description of a Namespace resource.
 */
export class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Namespace {
        return new Namespace(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:notificationhubs/v20170401:Namespace';

    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Namespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Namespace.__pulumiType;
    }

    /**
     * The time the namespace was created.
     */
    public readonly createdAt!: pulumi.Output<string | undefined>;
    /**
     * Whether or not the namespace is set as Critical.
     */
    public readonly critical!: pulumi.Output<boolean | undefined>;
    /**
     * Data center for the namespace
     */
    public readonly dataCenter!: pulumi.Output<string | undefined>;
    /**
     * Whether or not the namespace is currently enabled.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * Resource location
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Identifier for Azure Insights metrics
     */
    public /*out*/ readonly metricId!: pulumi.Output<string>;
    /**
     * Resource name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The namespace type.
     */
    public readonly namespaceType!: pulumi.Output<string | undefined>;
    /**
     * Provisioning state of the Namespace.
     */
    public readonly provisioningState!: pulumi.Output<string | undefined>;
    /**
     * Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
     */
    public readonly region!: pulumi.Output<string | undefined>;
    /**
     * ScaleUnit where the namespace gets created
     */
    public readonly scaleUnit!: pulumi.Output<string | undefined>;
    /**
     * Endpoint you can use to perform NotificationHub operations.
     */
    public readonly serviceBusEndpoint!: pulumi.Output<string | undefined>;
    /**
     * The sku of the created namespace
     */
    public readonly sku!: pulumi.Output<types.outputs.SkuResponse | undefined>;
    /**
     * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
     */
    public readonly status!: pulumi.Output<string | undefined>;
    /**
     * The Id of the Azure subscription associated with the namespace.
     */
    public readonly subscriptionId!: pulumi.Output<string | undefined>;
    /**
     * Resource tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The time the namespace was updated.
     */
    public readonly updatedAt!: pulumi.Output<string | undefined>;

    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamespaceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["createdAt"] = args ? args.createdAt : undefined;
            resourceInputs["critical"] = args ? args.critical : undefined;
            resourceInputs["dataCenter"] = args ? args.dataCenter : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespaceName"] = args ? args.namespaceName : undefined;
            resourceInputs["namespaceType"] = args ? args.namespaceType : undefined;
            resourceInputs["provisioningState"] = args ? args.provisioningState : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["scaleUnit"] = args ? args.scaleUnit : undefined;
            resourceInputs["serviceBusEndpoint"] = args ? args.serviceBusEndpoint : undefined;
            resourceInputs["sku"] = args ? args.sku : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["updatedAt"] = args ? args.updatedAt : undefined;
            resourceInputs["metricId"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["critical"] = undefined /*out*/;
            resourceInputs["dataCenter"] = undefined /*out*/;
            resourceInputs["enabled"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["metricId"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["namespaceType"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["region"] = undefined /*out*/;
            resourceInputs["scaleUnit"] = undefined /*out*/;
            resourceInputs["serviceBusEndpoint"] = undefined /*out*/;
            resourceInputs["sku"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["subscriptionId"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:notificationhubs:Namespace" }, { type: "azure-native:notificationhubs/v20140901:Namespace" }, { type: "azure-native:notificationhubs/v20160301:Namespace" }, { type: "azure-native:notificationhubs/v20230101preview:Namespace" }, { type: "azure-native:notificationhubs/v20230901:Namespace" }, { type: "azure-native:notificationhubs/v20231001preview:Namespace" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Namespace.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    /**
     * The time the namespace was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * Whether or not the namespace is set as Critical.
     */
    critical?: pulumi.Input<boolean>;
    /**
     * Data center for the namespace
     */
    dataCenter?: pulumi.Input<string>;
    /**
     * Whether or not the namespace is currently enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Resource location
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the namespace.
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace name.
     */
    namespaceName?: pulumi.Input<string>;
    /**
     * The namespace type.
     */
    namespaceType?: pulumi.Input<types.enums.NamespaceType>;
    /**
     * Provisioning state of the Namespace.
     */
    provisioningState?: pulumi.Input<string>;
    /**
     * Specifies the targeted region in which the namespace should be created. It can be any of the following values: Australia East, Australia Southeast, Central US, East US, East US 2, West US, North Central US, South Central US, East Asia, Southeast Asia, Brazil South, Japan East, Japan West, North Europe, West Europe
     */
    region?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * ScaleUnit where the namespace gets created
     */
    scaleUnit?: pulumi.Input<string>;
    /**
     * Endpoint you can use to perform NotificationHub operations.
     */
    serviceBusEndpoint?: pulumi.Input<string>;
    /**
     * The sku of the created namespace
     */
    sku?: pulumi.Input<types.inputs.SkuArgs>;
    /**
     * Status of the namespace. It can be any of these values:1 = Created/Active2 = Creating3 = Suspended4 = Deleting
     */
    status?: pulumi.Input<string>;
    /**
     * The Id of the Azure subscription associated with the namespace.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Resource tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The time the namespace was updated.
     */
    updatedAt?: pulumi.Input<string>;
}