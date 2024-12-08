import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Domain Topic.
 * Azure REST API version: 2022-06-15. Prior API version in Azure Native 1.x: 2020-06-01.
 *
 * Other available API versions: 2023-06-01-preview, 2023-12-15-preview, 2024-06-01-preview, 2024-12-15-preview.
 */
export class DomainTopic extends pulumi.CustomResource {
    /**
     * Get an existing DomainTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DomainTopic {
        return new DomainTopic(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:eventgrid:DomainTopic';

    /**
     * Returns true if the given object is an instance of DomainTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DomainTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DomainTopic.__pulumiType;
    }

    /**
     * Name of the resource.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Provisioning state of the domain topic.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * The system metadata relating to Domain Topic resource.
     */
    public /*out*/ readonly systemData!: pulumi.Output<types.outputs.SystemDataResponse>;
    /**
     * Type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DomainTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DomainTopicArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.domainName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainName'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["domainName"] = args ? args.domainName : undefined;
            resourceInputs["domainTopicName"] = args ? args.domainTopicName : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["systemData"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:eventgrid/v20190201preview:DomainTopic" }, { type: "azure-native:eventgrid/v20190601:DomainTopic" }, { type: "azure-native:eventgrid/v20200101preview:DomainTopic" }, { type: "azure-native:eventgrid/v20200401preview:DomainTopic" }, { type: "azure-native:eventgrid/v20200601:DomainTopic" }, { type: "azure-native:eventgrid/v20201015preview:DomainTopic" }, { type: "azure-native:eventgrid/v20210601preview:DomainTopic" }, { type: "azure-native:eventgrid/v20211015preview:DomainTopic" }, { type: "azure-native:eventgrid/v20211201:DomainTopic" }, { type: "azure-native:eventgrid/v20220615:DomainTopic" }, { type: "azure-native:eventgrid/v20230601preview:DomainTopic" }, { type: "azure-native:eventgrid/v20231215preview:DomainTopic" }, { type: "azure-native:eventgrid/v20240601preview:DomainTopic" }, { type: "azure-native:eventgrid/v20241215preview:DomainTopic" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DomainTopic.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DomainTopic resource.
 */
export interface DomainTopicArgs {
    /**
     * Name of the domain.
     */
    domainName: pulumi.Input<string>;
    /**
     * Name of the domain topic.
     */
    domainTopicName?: pulumi.Input<string>;
    /**
     * The name of the resource group within the user's subscription.
     */
    resourceGroupName: pulumi.Input<string>;
}