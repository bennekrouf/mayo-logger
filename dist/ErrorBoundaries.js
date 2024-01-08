"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crashlytics_1 = __importDefault(require("@react-native-firebase/crashlytics"));
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const Logger_1 = require("./Logger");
const styles = react_native_1.StyleSheet.create({
    errorText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    centeredContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
class ErrorBoundary extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(_) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        (0, crashlytics_1.default)().recordError(error); // Log the error to Crashlytics
        // You can still use your custom logger as well
        Logger_1.Logger.error("An error occurred: " + error.toString(), errorInfo);
    }
    logErrorToMyService(error, errorInfo) {
        Logger_1.Logger.error("An error occurred: " + error.toString(), errorInfo);
    }
    render() {
        if (this.state.hasError) {
            return (react_1.default.createElement(react_native_1.View, { style: styles.centeredContent },
                react_1.default.createElement(react_native_1.Text, { style: styles.errorText }, "Something went wrong.")));
        }
        return this.props.children;
    }
}
exports.default = ErrorBoundary;
