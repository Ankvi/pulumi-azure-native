import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
/**
 * Azure Active Directory only authentication.
 *
 * Uses Azure REST API version 2023-08-01. In version 2.x of the Azure Native provider, it used API version 2021-11-01.
 *
 * Other available API versions: 2020-02-02-preview, 2020-08-01-preview, 2020-11-01-preview, 2021-02-01-preview, 2021-05-01-preview, 2021-08-01-preview, 2021-11-01, 2021-11-01-preview, 2022-02-01-preview, 2022-05-01-preview, 2022-08-01-preview, 2022-11-01-preview, 2023-02-01-preview, 2023-05-01-preview, 2023-08-01-preview, 2024-05-01-preview. These can be accessed by generating a local SDK package using the CLI command `pulumi package add azure-native sql [ApiVersion]`. See the [version guide](../../../version-guide/#accessing-any-api-version-via-local-packages) for details.
 */
export class ServerAzureADOnlyAuthentication extends pulumi.CustomResource {
    /**
     * Get an existing ServerAzureADOnlyAuthentication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ServerAzureADOnlyAuthentication {
        return new ServerAzureADOnlyAuthentication(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:sql:ServerAzureADOnlyAuthentication';

    /**
     * Returns true if the given object is an instance of ServerAzureADOnlyAuthentication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServerAzureADOnlyAuthentication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServerAzureADOnlyAuthentication.__pulumiType;
    }

    /**
     * Azure Active Directory only Authentication enabled.
     */
    public readonly azureADOnlyAuthentication!: pulumi.Output<boolean>;
    /**
     * The Azure API version of the resource.
     */
    public /*out*/ readonly azureApiVersion!: pulumi.Output<string>;
    /**
     * Resource name.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Resource type.
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a ServerAzureADOnlyAuthentication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerAzureADOnlyAuthenticationArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.azureADOnlyAuthentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'azureADOnlyAuthentication'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serverName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverName'");
            }
            resourceInputs["authenticationName"] = args ? args.authenticationName : undefined;
            resourceInputs["azureADOnlyAuthentication"] = args ? args.azureADOnlyAuthentication : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serverName"] = args ? args.serverName : undefined;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["azureADOnlyAuthentication"] = undefined /*out*/;
            resourceInputs["azureApiVersion"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:sql/v20200202preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20200801preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20201101preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20210201preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20210501preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20210801preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20211101:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20211101preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20220201preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20220501preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20220801preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20221101preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20230201preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20230501preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20230801:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20230801preview:ServerAzureADOnlyAuthentication" }, { type: "azure-native:sql/v20240501preview:ServerAzureADOnlyAuthentication" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ServerAzureADOnlyAuthentication.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ServerAzureADOnlyAuthentication resource.
 */
export interface ServerAzureADOnlyAuthenticationArgs {
    /**
     * The name of server azure active directory only authentication.
     */
    authenticationName?: pulumi.Input<string>;
    /**
     * Azure Active Directory only Authentication enabled.
     */
    azureADOnlyAuthentication: pulumi.Input<boolean>;
    /**
     * The name of the resource group that contains the resource. You can obtain this value from the Azure Resource Manager API or the portal.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the server.
     */
    serverName: pulumi.Input<string>;
}