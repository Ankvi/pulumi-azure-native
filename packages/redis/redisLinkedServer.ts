import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Response to put/get linked server (with properties) for Redis cache.
 *
 * Uses Azure REST API version 2017-02-01.
 */
export class RedisLinkedServer extends pulumi.CustomResource {
    /**
     * Get an existing RedisLinkedServer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): RedisLinkedServer {
        return new RedisLinkedServer(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:redis:RedisLinkedServer';

    /**
     * Returns true if the given object is an instance of RedisLinkedServer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RedisLinkedServer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RedisLinkedServer.__pulumiType;
    }

    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Fully qualified resourceId of the linked redis cache.
     */
    public readonly linkedRedisCacheId!: pulumi.Output<string>;
    /**
     * Location of the linked redis cache.
     */
    public readonly linkedRedisCacheLocation!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Terminal state of the link between primary and secondary redis cache.
     */
    public /*out*/ readonly provisioningState!: pulumi.Output<string>;
    /**
     * Role of the linked server.
     */
    public readonly serverRole!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a RedisLinkedServer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RedisLinkedServerArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.linkedRedisCacheId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'linkedRedisCacheId'");
            }
            if ((!args || args.linkedRedisCacheLocation === undefined) && !opts.urn) {
                throw new Error("Missing required property 'linkedRedisCacheLocation'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverRole === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverRole'");
            }
            resourceInputs["linkedRedisCacheId"] = args ? args.linkedRedisCacheId : undefined;
            resourceInputs["linkedRedisCacheLocation"] = args ? args.linkedRedisCacheLocation : undefined;
            resourceInputs["linkedServerName"] = args ? args.linkedServerName : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverRole"] = args ? args.serverRole : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["linkedRedisCacheId"] = undefined /*out*/;
            resourceInputs["linkedRedisCacheLocation"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["provisioningState"] = undefined /*out*/;
            resourceInputs["serverRole"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:cache/v20230401:LinkedServer" }, { type: "azure-native:cache/v20230501preview:LinkedServer" }, { type: "azure-native:cache/v20230801:LinkedServer" }, { type: "azure-native:cache/v20240301:LinkedServer" }, { type: "azure-native:cache/v20240401preview:LinkedServer" }, { type: "azure-native:cache/v20241101:LinkedServer" }, { type: "azure-native:cache:LinkedServer" }, { type: "azure-native:redis/v20170201:RedisLinkedServer" }, { type: "azure-native:redis/v20171001:RedisLinkedServer" }, { type: "azure-native:redis/v20180301:RedisLinkedServer" }, { type: "azure-native:redis/v20190701:RedisLinkedServer" }, { type: "azure-native:redis/v20200601:RedisLinkedServer" }, { type: "azure-native:redis/v20201201:RedisLinkedServer" }, { type: "azure-native:redis/v20210601:RedisLinkedServer" }, { type: "azure-native:redis/v20220501:RedisLinkedServer" }, { type: "azure-native:redis/v20220601:RedisLinkedServer" }, { type: "azure-native:redis/v20230401:RedisLinkedServer" }, { type: "azure-native:redis/v20230501preview:RedisLinkedServer" }, { type: "azure-native:redis/v20230801:RedisLinkedServer" }, { type: "azure-native:redis/v20240301:RedisLinkedServer" }, { type: "azure-native:redis/v20240401preview:RedisLinkedServer" }, { type: "azure-native:redis/v20241101:RedisLinkedServer" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(RedisLinkedServer.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a RedisLinkedServer resource.
 */
export interface RedisLinkedServerArgs {
    /**
     * Fully qualified resourceId of the linked redis cache.
     */
    linkedRedisCacheId: pulumi.Input<string>;
    /**
     * Location of the linked redis cache.
     */
    linkedRedisCacheLocation: pulumi.Input<string>;
    /**
     * The name of the linked server that is being added to the Redis cache.
     */
    linkedServerName?: pulumi.Input<string>;
    /**
     * The name of the Redis cache.
     */
    name: pulumi.Input<string>;
    /**
     * The name of the resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Role of the linked server.
     */
    serverRole: pulumi.Input<types.enums.ReplicationRole>;
}