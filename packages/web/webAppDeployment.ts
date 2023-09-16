import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * User credentials used for publishing activity.
 * Azure REST API version: 2022-09-01. Prior API version in Azure Native 1.x: 2020-12-01
 */
export class WebAppDeployment extends pulumi.CustomResource {
    /**
     * Get an existing WebAppDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): WebAppDeployment {
        return new WebAppDeployment(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:web:WebAppDeployment';

    /**
     * Returns true if the given object is an instance of WebAppDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebAppDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebAppDeployment.__pulumiType;
    }

    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    public readonly active!: pulumi.Output<boolean | undefined>;
    /**
     * Who authored the deployment.
     */
    public readonly author!: pulumi.Output<string | undefined>;
    /**
     * Author email.
     */
    public readonly authorEmail!: pulumi.Output<string | undefined>;
    /**
     * Who performed the deployment.
     */
    public readonly deployer!: pulumi.Output<string | undefined>;
    /**
     * Details on deployment.
     */
    public readonly details!: pulumi.Output<string | undefined>;
    /**
     * End time.
     */
    public readonly endTime!: pulumi.Output<string | undefined>;
    /**
     * Kind of resource.
     */
    public readonly kind!: pulumi.Output<string | undefined>;
    /**
     * Details about deployment status.
     */
    public readonly message!: pulumi.Output<string | undefined>;
    /**
     * Resource Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Start time.
     */
    public readonly startTime!: pulumi.Output<string | undefined>;
    /**
     * Deployment status.
     */
    public readonly status!: pulumi.Output<number | undefined>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a WebAppDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebAppDeploymentArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            resourceInputs["active"] = args ? args.active : undefined;
            resourceInputs["author"] = args ? args.author : undefined;
            resourceInputs["authorEmail"] = args ? args.authorEmail : undefined;
            resourceInputs["deployer"] = args ? args.deployer : undefined;
            resourceInputs["details"] = args ? args.details : undefined;
            resourceInputs["endTime"] = args ? args.endTime : undefined;
            resourceInputs["id"] = args ? args.id : undefined;
            resourceInputs["kind"] = args ? args.kind : undefined;
            resourceInputs["message"] = args ? args.message : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["startTime"] = args ? args.startTime : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["active"] = undefined /*out*/;
            resourceInputs["author"] = undefined /*out*/;
            resourceInputs["authorEmail"] = undefined /*out*/;
            resourceInputs["deployer"] = undefined /*out*/;
            resourceInputs["details"] = undefined /*out*/;
            resourceInputs["endTime"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["message"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["startTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:web/v20150801:WebAppDeployment" }, { type: "azure-native:web/v20160801:WebAppDeployment" }, { type: "azure-native:web/v20180201:WebAppDeployment" }, { type: "azure-native:web/v20181101:WebAppDeployment" }, { type: "azure-native:web/v20190801:WebAppDeployment" }, { type: "azure-native:web/v20200601:WebAppDeployment" }, { type: "azure-native:web/v20200901:WebAppDeployment" }, { type: "azure-native:web/v20201001:WebAppDeployment" }, { type: "azure-native:web/v20201201:WebAppDeployment" }, { type: "azure-native:web/v20210101:WebAppDeployment" }, { type: "azure-native:web/v20210115:WebAppDeployment" }, { type: "azure-native:web/v20210201:WebAppDeployment" }, { type: "azure-native:web/v20210301:WebAppDeployment" }, { type: "azure-native:web/v20220301:WebAppDeployment" }, { type: "azure-native:web/v20220901:WebAppDeployment" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(WebAppDeployment.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a WebAppDeployment resource.
 */
export interface WebAppDeploymentArgs {
    /**
     * True if deployment is currently active, false if completed and null if not started.
     */
    active?: pulumi.Input<boolean>;
    /**
     * Who authored the deployment.
     */
    author?: pulumi.Input<string>;
    /**
     * Author email.
     */
    authorEmail?: pulumi.Input<string>;
    /**
     * Who performed the deployment.
     */
    deployer?: pulumi.Input<string>;
    /**
     * Details on deployment.
     */
    details?: pulumi.Input<string>;
    /**
     * End time.
     */
    endTime?: pulumi.Input<string>;
    /**
     * ID of an existing deployment.
     */
    id?: pulumi.Input<string>;
    /**
     * Kind of resource.
     */
    kind?: pulumi.Input<string>;
    /**
     * Details about deployment status.
     */
    message?: pulumi.Input<string>;
    /**
     * Name of the app.
     */
    name: pulumi.Input<string>;
    /**
     * Name of the resource group to which the resource belongs.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Start time.
     */
    startTime?: pulumi.Input<string>;
    /**
     * Deployment status.
     */
    status?: pulumi.Input<number>;
}
