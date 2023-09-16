import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "../types";
/**
 * Deployment information.
 */
export class DeploymentAtManagementGroupScope extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentAtManagementGroupScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentAtManagementGroupScope {
        return new DeploymentAtManagementGroupScope(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:resources/v20230701:DeploymentAtManagementGroupScope';

    /**
     * Returns true if the given object is an instance of DeploymentAtManagementGroupScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeploymentAtManagementGroupScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeploymentAtManagementGroupScope.__pulumiType;
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
    public readonly properties!: pulumi.Output<types.outputs.resources.v20230701.DeploymentPropertiesExtendedResponse>;
    /**
     * Deployment tags
     */
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The type of the deployment.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DeploymentAtManagementGroupScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentAtManagementGroupScopeArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.groupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'groupId'");
            }
            if ((!args || args.properties === undefined) && !opts.urn) {
                throw new Error("Missing required property 'properties'");
            }
            resourceInputs["deploymentName"] = args ? args.deploymentName : undefined;
            resourceInputs["groupId"] = args ? args.groupId : undefined;
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
        const aliasOpts = { aliases: [{ type: "azure-native:resources:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20190501:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20190510:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20190701:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20190801:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20191001:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20200601:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20200801:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20201001:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20210101:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20210401:DeploymentAtManagementGroupScope" }, { type: "azure-native:resources/v20220901:DeploymentAtManagementGroupScope" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(DeploymentAtManagementGroupScope.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeploymentAtManagementGroupScope resource.
 */
export interface DeploymentAtManagementGroupScopeArgs {
    /**
     * The name of the deployment.
     */
    deploymentName?: pulumi.Input<string>;
    /**
     * The management group ID.
     */
    groupId: pulumi.Input<string>;
    /**
     * The location to store the deployment data.
     */
    location?: pulumi.Input<string>;
    /**
     * The deployment properties.
     */
    properties: pulumi.Input<types.inputs.resources.v20230701.DeploymentPropertiesArgs>;
    /**
     * Deployment tags
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
