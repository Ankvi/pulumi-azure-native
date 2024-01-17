import * as pulumi from "@pulumi/pulumi";
import * as utilities from "@kengachu-pulumi/azure-native-core/utilities";
import * as types from "./types";
/**
 * Issue Contract details.
 * Azure REST API version: 2022-08-01. Prior API version in Azure Native 1.x: 2020-12-01.
 *
 * Other available API versions: 2022-09-01-preview, 2023-03-01-preview, 2023-05-01-preview.
 */
export class ApiIssue extends pulumi.CustomResource {
    /**
     * Get an existing ApiIssue resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): ApiIssue {
        return new ApiIssue(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azure-native:apimanagement:ApiIssue';

    /**
     * Returns true if the given object is an instance of ApiIssue.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApiIssue {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApiIssue.__pulumiType;
    }

    /**
     * A resource identifier for the API the issue was created for.
     */
    public readonly apiId!: pulumi.Output<string | undefined>;
    /**
     * Date and time when the issue was created.
     */
    public readonly createdDate!: pulumi.Output<string | undefined>;
    /**
     * Text describing the issue.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the resource
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Status of the issue.
     */
    public readonly state!: pulumi.Output<string | undefined>;
    /**
     * The issue title.
     */
    public readonly title!: pulumi.Output<string>;
    /**
     * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
     */
    public /*out*/ readonly type!: pulumi.Output<string>;
    /**
     * A resource identifier for the user created the issue.
     */
    public readonly userId!: pulumi.Output<string>;

    /**
     * Create a ApiIssue resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiIssueArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.apiId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apiId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.title === undefined) && !opts.urn) {
                throw new Error("Missing required property 'title'");
            }
            if ((!args || args.userId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userId'");
            }
            resourceInputs["apiId"] = args ? args.apiId : undefined;
            resourceInputs["createdDate"] = args ? args.createdDate : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["issueId"] = args ? args.issueId : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["title"] = args ? args.title : undefined;
            resourceInputs["userId"] = args ? args.userId : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        } else {
            resourceInputs["apiId"] = undefined /*out*/;
            resourceInputs["createdDate"] = undefined /*out*/;
            resourceInputs["description"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["title"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
            resourceInputs["userId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const aliasOpts = { aliases: [{ type: "azure-native:apimanagement/v20170301:ApiIssue" }, { type: "azure-native:apimanagement/v20180101:ApiIssue" }, { type: "azure-native:apimanagement/v20180601preview:ApiIssue" }, { type: "azure-native:apimanagement/v20190101:ApiIssue" }, { type: "azure-native:apimanagement/v20191201:ApiIssue" }, { type: "azure-native:apimanagement/v20191201preview:ApiIssue" }, { type: "azure-native:apimanagement/v20200601preview:ApiIssue" }, { type: "azure-native:apimanagement/v20201201:ApiIssue" }, { type: "azure-native:apimanagement/v20210101preview:ApiIssue" }, { type: "azure-native:apimanagement/v20210401preview:ApiIssue" }, { type: "azure-native:apimanagement/v20210801:ApiIssue" }, { type: "azure-native:apimanagement/v20211201preview:ApiIssue" }, { type: "azure-native:apimanagement/v20220401preview:ApiIssue" }, { type: "azure-native:apimanagement/v20220801:ApiIssue" }, { type: "azure-native:apimanagement/v20220901preview:ApiIssue" }, { type: "azure-native:apimanagement/v20230301preview:ApiIssue" }, { type: "azure-native:apimanagement/v20230501preview:ApiIssue" }] };
        opts = pulumi.mergeOptions(opts, aliasOpts);
        super(ApiIssue.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a ApiIssue resource.
 */
export interface ApiIssueArgs {
    /**
     * A resource identifier for the API the issue was created for.
     */
    apiId: pulumi.Input<string>;
    /**
     * Date and time when the issue was created.
     */
    createdDate?: pulumi.Input<string>;
    /**
     * Text describing the issue.
     */
    description: pulumi.Input<string>;
    /**
     * Issue identifier. Must be unique in the current API Management service instance.
     */
    issueId?: pulumi.Input<string>;
    /**
     * The name of the resource group. The name is case insensitive.
     */
    resourceGroupName: pulumi.Input<string>;
    /**
     * The name of the API Management service.
     */
    serviceName: pulumi.Input<string>;
    /**
     * Status of the issue.
     */
    state?: pulumi.Input<string | types.enums.State>;
    /**
     * The issue title.
     */
    title: pulumi.Input<string>;
    /**
     * A resource identifier for the user created the issue.
     */
    userId: pulumi.Input<string>;
}
