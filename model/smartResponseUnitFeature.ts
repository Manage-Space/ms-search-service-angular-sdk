/**
 * ManageSpace Search API
 * ManageSpace Search API Documentation
 *
 * The version of the OpenAPI document: 0.0.11-dev
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { SmartFeature } from './smartFeature';


export interface SmartResponseUnitFeature { 
    /**
     * Feature ID
     */
    featureId: string;
    /**
     * Feature name
     */
    featureName: string;
    /**
     * Minimum price
     */
    minPrice: number;
    /**
     * Maximum price
     */
    maxPrice: number;
    /**
     * List of additional features
     */
    additionalFeatures: Array<SmartFeature>;
}
