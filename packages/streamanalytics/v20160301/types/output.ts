import * as pulumi from "@pulumi/pulumi";
    /**
     * The binding to an Azure Machine Learning web service.
     */
    export interface AzureMachineLearningWebServiceFunctionBindingResponse {
        /**
         * The API key used to authenticate with Request-Response endpoint.
         */
        apiKey?: string;
        /**
         * Number between 1 and 10000 describing maximum number of rows for every Azure ML RRS execute request. Default is 1000.
         */
        batchSize?: number;
        /**
         * The Request-Response execute endpoint of the Azure Machine Learning web service. Find out more here: https://docs.microsoft.com/en-us/azure/machine-learning/machine-learning-consume-web-services#request-response-service-rrs
         */
        endpoint?: string;
        /**
         * The inputs for the Azure Machine Learning web service endpoint.
         */
        inputs?: AzureMachineLearningWebServiceInputsResponse;
        /**
         * A list of outputs from the Azure Machine Learning web service endpoint execution.
         */
        outputs?: AzureMachineLearningWebServiceOutputColumnResponse[];
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.MachineLearning/WebService'.
         */
        type: "Microsoft.MachineLearning/WebService";
    }

    /**
     * Describes an input column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceInputColumnResponse {
        /**
         * The (Azure Machine Learning supported) data type of the input column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: string;
        /**
         * The zero based index of the function parameter this input maps to.
         */
        mapTo?: number;
        /**
         * The name of the input column.
         */
        name?: string;
    }

    /**
     * The inputs for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceInputsResponse {
        /**
         * A list of input columns for the Azure Machine Learning web service endpoint.
         */
        columnNames?: AzureMachineLearningWebServiceInputColumnResponse[];
        /**
         * The name of the input. This is the name provided while authoring the endpoint.
         */
        name?: string;
    }

    /**
     * Describes an output column for the Azure Machine Learning web service endpoint.
     */
    export interface AzureMachineLearningWebServiceOutputColumnResponse {
        /**
         * The (Azure Machine Learning supported) data type of the output column. A list of valid  Azure Machine Learning data types are described at https://msdn.microsoft.com/en-us/library/azure/dn905923.aspx .
         */
        dataType?: string;
        /**
         * The name of the output column.
         */
        name?: string;
    }

    /**
     * Describes one input parameter of a function.
     */
    export interface FunctionInputResponse {
        /**
         * The (Azure Stream Analytics supported) data type of the function input parameter. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: string;
        /**
         * A flag indicating if the parameter is a configuration parameter. True if this input parameter is expected to be a constant. Default is false.
         */
        isConfigurationParameter?: boolean;
    }

    /**
     * Describes the output of a function.
     */
    export interface FunctionOutputResponse {
        /**
         * The (Azure Stream Analytics supported) data type of the function output. A list of valid Azure Stream Analytics data types are described at https://msdn.microsoft.com/en-us/library/azure/dn835065.aspx
         */
        dataType?: string;
    }

    /**
     * The binding to a JavaScript function.
     */
    export interface JavaScriptFunctionBindingResponse {
        /**
         * The JavaScript code containing a single function definition. For example: 'function (x, y) { return x + y; }'
         */
        script?: string;
        /**
         * Indicates the function binding type.
         * Expected value is 'Microsoft.StreamAnalytics/JavascriptUdf'.
         */
        type: "Microsoft.StreamAnalytics/JavascriptUdf";
    }

    /**
     * The properties that are associated with a scalar function.
     */
    export interface ScalarFunctionPropertiesResponse {
        /**
         * The physical binding of the function. For example, in the Azure Machine Learning web service’s case, this describes the endpoint.
         */
        binding?: AzureMachineLearningWebServiceFunctionBindingResponse | JavaScriptFunctionBindingResponse;
        /**
         * The current entity tag for the function. This is an opaque string. You can use it to detect whether the resource has changed between requests. You can also use it in the If-Match or If-None-Match headers for write operations for optimistic concurrency.
         */
        etag: string;
        /**
         * A list of inputs describing the parameters of the function.
         */
        inputs?: FunctionInputResponse[];
        /**
         * The output of the function.
         */
        output?: FunctionOutputResponse;
        /**
         * Indicates the type of function.
         * Expected value is 'Scalar'.
         */
        type: "Scalar";
    }
