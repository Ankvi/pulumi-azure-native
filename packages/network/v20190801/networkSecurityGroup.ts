import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * NetworkSecurityGroup resource.
 */
export class NetworkSecurityGroup extends pulumi.CustomResource {
    /**
     * Get an existing NetworkSecurityGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): NetworkSecurityGroup {
        return new NetworkSecurityGroup(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:network/v20190801:NetworkSecurityGroup';

    /**
     * Returns true if the given object is an instance of NetworkSecurityGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkSecurityGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkSecurityGroup.__pulumiType;
    }

    /**
     * The default security rules of network security group.
     */
    public readonly defaultSecurityRules!: pulumi.Output<types.outputs.SecurityRuleResponse[] | undefined>;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     */
    public /*out*/ readonly etag!: pulumi.Output<string | undefined>;
    /**
     * Resource location.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * A collection of references to network interfaces.
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<types.outputs.NetworkInterfaceResponse[]>;
    /**
     * The provisioning state of the network security group resource.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The resource GUID property of the network security group resource.
     */
    public readonly resourceGuid!: pulumi.Output<string | undefined>;
    /**
     * A collection of security rules of the network security group.
     */
    public readonly securityRules!: pulumi.Output<types.outputs.SecurityRuleResponse[] | undefined>;
    /**
     * A collection of references to subnets.
     */
    public /*out*/ readonly subnets!: pulumi.Output<types.outputs.SubnetResponse[]>;
    /**
     * Resource tags.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a NetworkSecurityGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkSecurityGroupArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["defaultSecurityRules"] = args ? args.defaultSecurityRules : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["networkSecurityGroupName"] = args ? args.networkSecurityGroupName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["resourceGuid"] = args ? args.resourceGuid : undefined;
            resourceInputs["securityRules"] = args ? args.securityRules : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["defaultSecurityRules"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["resourceGuid"] = undefined /*out*/;
            resourceInputs["securityRules"] = undefined /*out*/;
            resourceInputs["subnets"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:network:NetworkSecurityGroup" }, { type: "azure-native:network/v20150501preview:NetworkSecurityGroup" }, { type: "azure-native:network/v20150615:NetworkSecurityGroup" }, { type: "azure-native:network/v20160330:NetworkSecurityGroup" }, { type: "azure-native:network/v20160601:NetworkSecurityGroup" }, { type: "azure-native:network/v20160901:NetworkSecurityGroup" }, { type: "azure-native:network/v20161201:NetworkSecurityGroup" }, { type: "azure-native:network/v20170301:NetworkSecurityGroup" }, { type: "azure-native:network/v20170601:NetworkSecurityGroup" }, { type: "azure-native:network/v20170801:NetworkSecurityGroup" }, { type: "azure-native:network/v20170901:NetworkSecurityGroup" }, { type: "azure-native:network/v20171001:NetworkSecurityGroup" }, { type: "azure-native:network/v20171101:NetworkSecurityGroup" }, { type: "azure-native:network/v20180101:NetworkSecurityGroup" }, { type: "azure-native:network/v20180201:NetworkSecurityGroup" }, { type: "azure-native:network/v20180401:NetworkSecurityGroup" }, { type: "azure-native:network/v20180601:NetworkSecurityGroup" }, { type: "azure-native:network/v20180701:NetworkSecurityGroup" }, { type: "azure-native:network/v20180801:NetworkSecurityGroup" }, { type: "azure-native:network/v20181001:NetworkSecurityGroup" }, { type: "azure-native:network/v20181101:NetworkSecurityGroup" }, { type: "azure-native:network/v20181201:NetworkSecurityGroup" }, { type: "azure-native:network/v20190201:NetworkSecurityGroup" }, { type: "azure-native:network/v20190401:NetworkSecurityGroup" }, { type: "azure-native:network/v20190601:NetworkSecurityGroup" }, { type: "azure-native:network/v20190701:NetworkSecurityGroup" }, { type: "azure-native:network/v20190901:NetworkSecurityGroup" }, { type: "azure-native:network/v20191101:NetworkSecurityGroup" }, { type: "azure-native:network/v20191201:NetworkSecurityGroup" }, { type: "azure-native:network/v20200301:NetworkSecurityGroup" }, { type: "azure-native:network/v20200401:NetworkSecurityGroup" }, { type: "azure-native:network/v20200501:NetworkSecurityGroup" }, { type: "azure-native:network/v20200601:NetworkSecurityGroup" }, { type: "azure-native:network/v20200701:NetworkSecurityGroup" }, { type: "azure-native:network/v20200801:NetworkSecurityGroup" }, { type: "azure-native:network/v20201101:NetworkSecurityGroup" }, { type: "azure-native:network/v20210201:NetworkSecurityGroup" }, { type: "azure-native:network/v20210301:NetworkSecurityGroup" }, { type: "azure-native:network/v20210501:NetworkSecurityGroup" }, { type: "azure-native:network/v20210801:NetworkSecurityGroup" }, { type: "azure-native:network/v20220101:NetworkSecurityGroup" }, { type: "azure-native:network/v20220501:NetworkSecurityGroup" }, { type: "azure-native:network/v20220701:NetworkSecurityGroup" }, { type: "azure-native:network/v20220901:NetworkSecurityGroup" }, { type: "azure-native:network/v20221101:NetworkSecurityGroup" }, { type: "azure-native:network/v20230201:NetworkSecurityGroup" }, { type: "azure-native:network/v20230401:NetworkSecurityGroup" }, { type: "azure-native:network/v20230501:NetworkSecurityGroup" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(NetworkSecurityGroup.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a NetworkSecurityGroup resource.
 */
export interface NetworkSecurityGroupArgs {
    /**
     * The default security rules of network security group.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    defaultSecurityRules?: pulumi.Input<pulumi.Input<types.inputs.SecurityRuleArgs>[]>;
    /**
     * Resource ID.
     */
    id?: pulumi.Input<string>;
    /**
     * Resource location.
     */
    location?: pulumi.Input<string>;
    /**
     * The name of the network security group.
     */
    networkSecurityGroupName?: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The resource GUID property of the network security group resource.
     */
    resourceGuid?: pulumi.Input<string>;
    /**
     * A collection of security rules of the network security group.
     * These are also available as standalone resources. Do not mix inline and standalone resource as they will conflict with each other, leading to resources deletion.
     */
    securityRules?: pulumi.Input<pulumi.Input<types.inputs.SecurityRuleArgs>[]>;
    /**
     * Resource tags.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
