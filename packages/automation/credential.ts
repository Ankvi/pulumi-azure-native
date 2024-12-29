import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Definition of the credential.
 * Azure REST API version: 2022-08-08. Prior API version in Azure Native 1.x: 2019-06-01.
 *
 * Other available API versions: 2023-05-15-preview, 2023-11-01, 2024-10-23.
 */
export class Credential extends pulumi.CustomResource {
    /**
     * Get an existing Credential resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Credential {
        return new Credential(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:automation:Credential';

    /**
     * Returns true if the given object is an instance of Credential.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Credential {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Credential.__pulumiType;
    }

    /**
     * Gets the creation time.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * Gets or sets the description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Gets the last modified time.
     */
    public /*out*/ readonly lastModifiedTime!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of the resource.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * Gets the user name of the credential.
     */
    public readonly userName!: pulumi.Output<string>;

    /**
     * Create a Credential resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CredentialArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.automationAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'automationAccountName'");
            }
            if ((!args || args.name === undefined) && !opts.urn) {
                throw new Error("Missing required property 'name'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            resourceInputs["automationAccountName"] = args ? args.automationAccountName : undefined;
            resourceInputs["credentialName"] = args ? args.credentialName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["lastModifiedTime"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:automation/v20151031:Credential" }, { type: "azure-native:automation/v20190601:Credential" }, { type: "azure-native:automation/v20200113preview:Credential" }, { type: "azure-native:automation/v20220808:Credential" }, { type: "azure-native:automation/v20230515preview:Credential" }, { type: "azure-native:automation/v20231101:Credential" }, { type: "azure-native:automation/v20241023:Credential" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(Credential.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Credential resource.
 */
export interface CredentialArgs {
    /**
     * The name of the automation account.
     */
    automationAccountName: pulumi.Input<string>;
    /**
     * The parameters supplied to the create or update credential operation.
     */
    credentialName?: pulumi.Input<string>;
    /**
     * Gets or sets the description of the credential.
     */
    description?: pulumi.Input<string>;
    /**
     * Gets or sets the name of the credential.
     */
    name: pulumi.Input<string>;
    /**
     * Gets or sets the password of the credential.
     */
    password: pulumi.Input<string>;
    /**
     * Name of an Azure Resource group.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * Gets or sets the user name of the credential.
     */
    userName: pulumi.Input<string>;
}