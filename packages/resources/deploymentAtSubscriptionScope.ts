import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Deployment information.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2021-01-01
 */
export class DeploymentAtSubscriptionScope extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentAtSubscriptionScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentAtSubscriptionScope {
        return new DeploymentAtSubscriptionScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources:DeploymentAtSubscriptionScope';

    /**
     * Returns true if the given object is an instance of DeploymentAtSubscriptionScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeploymentAtSubscriptionScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeploymentAtSubscriptionScope.__pulumiType;
    }

    /**
     * the location of the deployment.
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * The name of the deployment.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Deployment properties.
     */
    public readonly properties!: pulumi.Output<types.outputs.resources.DeploymentPropertiesExtendedResponse>;
    /**
     * Deployment tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the deployment.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DeploymentAtSubscriptionScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentAtSubscriptionScopeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["location"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["properties"] = undefined /*out*/;
            resourceInputs["tags"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:resources/v20180501:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20190301:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20190501:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20190510:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20190701:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20190801:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20191001:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20200601:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20200801:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20201001:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20210101:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20210401:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20220901:DeploymentAtSubscriptionScope" }, { type: "azure-native:resources/v20230701:DeploymentAtSubscriptionScope" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DeploymentAtSubscriptionScope.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeploymentAtSubscriptionScope resource.
 */
export interface DeploymentAtSubscriptionScopeArgs {
    /**
     * The name of the deployment.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * The location to store the deployment data.
     */
    location?: pulumi.Input<string>;
    /**
     * The deployment properties.
     */
    properties: pulumi.Input<types.inputs.resources.DeploymentPropertiesArgs>;
    /**
     * Deployment tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
