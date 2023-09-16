import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * A stored credential that can be used by a job to connect to target databases.
 */
export class JobCredential extends pulumi.CustomResource {
    /**
     * Get an existing JobCredential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): JobCredential {
        return new JobCredential(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql/v20211101:JobCredential';

    /**
     * Returns true if the given object is an instance of JobCredential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is JobCredential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === JobCredential.__pulumiType;
    }

    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * The credential user name.
     */
    public readonly username!: pulumi.Output<string>;

    /**
     * Create a JobCredential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: JobCredentialArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.jobAgentName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'jobAgentName'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["credentialName"] = args ? args.credentialName : undefined;
            resourceInputs["jobAgentName"] = args ? args.jobAgentName : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql:JobCredential" }, { type: "azure-native:sql/v20170301preview:JobCredential" }, { type: "azure-native:sql/v20200202preview:JobCredential" }, { type: "azure-native:sql/v20200801preview:JobCredential" }, { type: "azure-native:sql/v20201101preview:JobCredential" }, { type: "azure-native:sql/v20210201preview:JobCredential" }, { type: "azure-native:sql/v20210501preview:JobCredential" }, { type: "azure-native:sql/v20210801preview:JobCredential" }, { type: "azure-native:sql/v20211101preview:JobCredential" }, { type: "azure-native:sql/v20220201preview:JobCredential" }, { type: "azure-native:sql/v20220501preview:JobCredential" }, { type: "azure-native:sql/v20220801preview:JobCredential" }, { type: "azure-native:sql/v20221101preview:JobCredential" }, { type: "azure-native:sql/v20230201preview:JobCredential" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(JobCredential.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a JobCredential resource.
 */
export interface JobCredentialArgs {
    /**
     * The name of the credential.
     */
    credentialName?: pulumi.Input<string>;
    /**
     * The name of the job agent.
     */
    jobAgentName: pulumi.Input<string>;
    /**
     * The credential password.
     */
    password: pulumi.Input<string>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
    /**
     * The credential user name.
     */
    username: pulumi.Input<string>;
}
