"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffMethod = exports.LineNumberPrefix = void 0;
const React = require("react");
const PropTypes = require("prop-types");
const classnames_1 = require("classnames");
const compute_lines_1 = require("./compute-lines");
Object.defineProperty(exports, "DiffMethod", { enumerable: true, get: function () { return compute_lines_1.DiffMethod; } });
const styles_1 = require("./styles");
const m = require('memoize-one');
const memoize = m.default || m;
var LineNumberPrefix;
(function (LineNumberPrefix) {
    LineNumberPrefix["LEFT"] = "L";
    LineNumberPrefix["RIGHT"] = "R";
})(LineNumberPrefix = exports.LineNumberPrefix || (exports.LineNumberPrefix = {}));
class DiffViewer extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Resets code block expand to the initial stage. Will be exposed to the parent component via
         * refs.
         */
        this.resetCodeBlocks = () => {
            if (this.state.expandedBlocks.length > 0) {
                this.setState({
                    expandedBlocks: [],
                });
                return true;
            }
            return false;
        };
        /**
         * Pushes the target expanded code block to the state. During the re-render,
         * this value is used to expand/fold unmodified code.
         */
        this.onBlockExpand = (id) => {
            const prevState = this.state.expandedBlocks.slice();
            prevState.push(id);
            this.setState({
                expandedBlocks: prevState,
            });
        };
        /**
         * Computes final styles for the diff viewer. It combines the default styles with the user
         * supplied overrides. The computed styles are cached with performance in mind.
         *
         * @param styles User supplied style overrides.
         */
        this.computeStyles = memoize(styles_1.default);
        /**
         * Returns a function with clicked line number in the closure. Returns an no-op function when no
         * onLineNumberClick handler is supplied.
         *
         * @param id Line id of a line.
         */
        this.onLineNumberClickProxy = (id) => {
            if (this.props.onLineNumberClick) {
                return (e) => this.props.onLineNumberClick(id, e);
            }
            return () => { };
        };
        /**
         * Maps over the word diff and constructs the required React elements to show word diff.
         *
         * @param diffArray Word diff information derived from line information.
         * @param renderer Optional renderer to format diff words. Useful for syntax highlighting.
         */
        this.renderWordDiff = (diffArray, renderer) => {
            return diffArray.map((wordDiff, i) => {
                return (React.createElement("span", { key: i, className: (0, classnames_1.default)(this.styles.wordDiff, {
                        [this.styles.wordAdded]: wordDiff.type === compute_lines_1.DiffType.ADDED,
                        [this.styles.wordRemoved]: wordDiff.type === compute_lines_1.DiffType.REMOVED,
                    }) }, renderer ? renderer(wordDiff.value) : wordDiff.value));
            });
        };
        /**
         * Maps over the line diff and constructs the required react elements to show line diff. It calls
         * renderWordDiff when encountering word diff. This takes care of both inline and split view line
         * renders.
         *
         * @param lineNumber Line number of the current line.
         * @param type Type of diff of the current line.
         * @param prefix Unique id to prefix with the line numbers.
         * @param value Content of the line. It can be a string or a word diff array.
         * @param additionalLineNumber Additional line number to be shown. Useful for rendering inline
         *  diff view. Right line number will be passed as additionalLineNumber.
         * @param additionalPrefix Similar to prefix but for additional line number.
         */
        this.renderLine = (lineNumber, type, prefix, value, additionalLineNumber, additionalPrefix) => {
            const lineNumberTemplate = `${prefix}-${lineNumber}`;
            const additionalLineNumberTemplate = `${additionalPrefix}-${additionalLineNumber}`;
            const highlightLine = this.props.highlightLines.includes(lineNumberTemplate) ||
                this.props.highlightLines.includes(additionalLineNumberTemplate);
            const added = type === compute_lines_1.DiffType.ADDED;
            const removed = type === compute_lines_1.DiffType.REMOVED;
            const changed = type === compute_lines_1.DiffType.CHANGED;
            let content;
            if (Array.isArray(value)) {
                content = this.renderWordDiff(value, this.props.renderContent);
            }
            else if (this.props.renderContent) {
                content = this.props.renderContent(value);
            }
            else {
                content = value;
            }
            return (React.createElement(React.Fragment, null,
                !this.props.hideLineNumbers && (React.createElement("td", { onClick: lineNumber && this.onLineNumberClickProxy(lineNumberTemplate), className: (0, classnames_1.default)(this.styles.gutter, {
                        [this.styles.emptyGutter]: !lineNumber,
                        [this.styles.diffAdded]: added,
                        [this.styles.diffRemoved]: removed,
                        [this.styles.diffChanged]: changed,
                        [this.styles.highlightedGutter]: highlightLine,
                    }) },
                    React.createElement("pre", { className: this.styles.lineNumber }, lineNumber))),
                !this.props.splitView && !this.props.hideLineNumbers && (React.createElement("td", { onClick: additionalLineNumber &&
                        this.onLineNumberClickProxy(additionalLineNumberTemplate), className: (0, classnames_1.default)(this.styles.gutter, {
                        [this.styles.emptyGutter]: !additionalLineNumber,
                        [this.styles.diffAdded]: added,
                        [this.styles.diffRemoved]: removed,
                        [this.styles.diffChanged]: changed,
                        [this.styles.highlightedGutter]: highlightLine,
                    }) },
                    React.createElement("pre", { className: this.styles.lineNumber }, additionalLineNumber))),
                this.props.renderGutter
                    ? this.props.renderGutter({
                        lineNumber,
                        type,
                        prefix,
                        value,
                        additionalLineNumber,
                        additionalPrefix,
                        styles: this.styles,
                    })
                    : null,
                React.createElement("td", { className: (0, classnames_1.default)(this.styles.marker, {
                        [this.styles.emptyLine]: !content,
                        [this.styles.diffAdded]: added,
                        [this.styles.diffRemoved]: removed,
                        [this.styles.diffChanged]: changed,
                        [this.styles.highlightedLine]: highlightLine,
                    }) },
                    React.createElement("pre", null,
                        added && '+',
                        removed && '-')),
                React.createElement("td", { className: (0, classnames_1.default)(this.styles.content, {
                        [this.styles.emptyLine]: !content,
                        [this.styles.diffAdded]: added,
                        [this.styles.diffRemoved]: removed,
                        [this.styles.diffChanged]: changed,
                        [this.styles.highlightedLine]: highlightLine,
                    }) },
                    React.createElement("pre", { className: this.styles.contentText }, content))));
        };
        /**
         * Generates lines for split view.
         *
         * @param obj Line diff information.
         * @param obj.left Life diff information for the left pane of the split view.
         * @param obj.right Life diff information for the right pane of the split view.
         * @param index React key for the lines.
         */
        this.renderSplitView = ({ left, right }, index) => {
            return (React.createElement("tr", { key: index, className: this.styles.line },
                this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value),
                this.renderLine(right.lineNumber, right.type, LineNumberPrefix.RIGHT, right.value)));
        };
        /**
         * Generates lines for inline view.
         *
         * @param obj Line diff information.
         * @param obj.left Life diff information for the added section of the inline view.
         * @param obj.right Life diff information for the removed section of the inline view.
         * @param index React key for the lines.
         */
        this.renderInlineView = ({ left, right }, index) => {
            let content;
            if (left.type === compute_lines_1.DiffType.REMOVED && right.type === compute_lines_1.DiffType.ADDED) {
                return (React.createElement(React.Fragment, { key: index },
                    React.createElement("tr", { className: this.styles.line }, this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value, null)),
                    React.createElement("tr", { className: this.styles.line }, this.renderLine(null, right.type, LineNumberPrefix.RIGHT, right.value, right.lineNumber))));
            }
            if (left.type === compute_lines_1.DiffType.REMOVED) {
                content = this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value, null);
            }
            if (left.type === compute_lines_1.DiffType.DEFAULT) {
                content = this.renderLine(left.lineNumber, left.type, LineNumberPrefix.LEFT, left.value, right.lineNumber, LineNumberPrefix.RIGHT);
            }
            if (right.type === compute_lines_1.DiffType.ADDED) {
                content = this.renderLine(null, right.type, LineNumberPrefix.RIGHT, right.value, right.lineNumber);
            }
            return (React.createElement("tr", { key: index, className: this.styles.line }, content));
        };
        /**
         * Returns a function with clicked block number in the closure.
         *
         * @param id Cold fold block id.
         */
        this.onBlockClickProxy = (id) => () => this.onBlockExpand(id);
        /**
         * Generates cold fold block. It also uses the custom message renderer when available to show
         * cold fold messages.
         *
         * @param num Number of skipped lines between two blocks.
         * @param blockNumber Code fold block id.
         * @param leftBlockLineNumber First left line number after the current code fold block.
         * @param rightBlockLineNumber First right line number after the current code fold block.
         */
        this.renderSkippedLineIndicator = (num, blockNumber, leftBlockLineNumber, rightBlockLineNumber) => {
            const { hideLineNumbers, splitView } = this.props;
            const message = this.props.codeFoldMessageRenderer ? (this.props.codeFoldMessageRenderer(num, leftBlockLineNumber, rightBlockLineNumber)) : (React.createElement("pre", { className: this.styles.codeFoldContent },
                "Expand ",
                num,
                " lines ..."));
            const content = (React.createElement("td", null,
                React.createElement("a", { onClick: this.onBlockClickProxy(blockNumber), tabIndex: 0 }, message)));
            const isUnifiedViewWithoutLineNumbers = !splitView && !hideLineNumbers;
            return (React.createElement("tr", { key: `${leftBlockLineNumber}-${rightBlockLineNumber}`, className: this.styles.codeFold },
                !hideLineNumbers && React.createElement("td", { className: this.styles.codeFoldGutter }),
                this.props.renderGutter ? (React.createElement("td", { className: this.styles.codeFoldGutter })) : null,
                React.createElement("td", { className: (0, classnames_1.default)({
                        [this.styles.codeFoldGutter]: isUnifiedViewWithoutLineNumbers,
                    }) }),
                isUnifiedViewWithoutLineNumbers ? (React.createElement(React.Fragment, null,
                    React.createElement("td", null),
                    content)) : (React.createElement(React.Fragment, null,
                    content,
                    this.props.renderGutter ? React.createElement("td", null) : null,
                    React.createElement("td", null))),
                React.createElement("td", null),
                React.createElement("td", null)));
        };
        /**
         * Generates the entire diff view.
         */
        this.renderDiff = () => {
            const { oldValue, newValue, splitView, disableWordDiff, compareMethod, linesOffset, } = this.props;
            const { lineInformation, diffLines } = (0, compute_lines_1.computeLineInformation)(oldValue, newValue, disableWordDiff, compareMethod, linesOffset);
            const extraLines = this.props.extraLinesSurroundingDiff < 0
                ? 0
                : this.props.extraLinesSurroundingDiff;
            let skippedLines = [];
            return lineInformation.map((line, i) => {
                const diffBlockStart = diffLines[0];
                const currentPosition = diffBlockStart - i;
                if (this.props.showDiffOnly) {
                    if (currentPosition === -extraLines) {
                        skippedLines = [];
                        diffLines.shift();
                    }
                    if (line.left.type === compute_lines_1.DiffType.DEFAULT &&
                        (currentPosition > extraLines ||
                            typeof diffBlockStart === 'undefined') &&
                        !this.state.expandedBlocks.includes(diffBlockStart)) {
                        skippedLines.push(i + 1);
                        // show skipped line indicator only if there is more than one line to hide
                        if (i === lineInformation.length - 1 && skippedLines.length > 1) {
                            return this.renderSkippedLineIndicator(skippedLines.length, diffBlockStart, line.left.lineNumber, line.right.lineNumber);
                            // if we are trying to hide the last line, just show it
                        }
                        else if (i < lineInformation.length - 1) {
                            return null;
                        }
                    }
                }
                const diffNodes = splitView
                    ? this.renderSplitView(line, i)
                    : this.renderInlineView(line, i);
                if (currentPosition === extraLines && skippedLines.length > 0) {
                    const { length } = skippedLines;
                    skippedLines = [];
                    return (React.createElement(React.Fragment, { key: i },
                        this.renderSkippedLineIndicator(length, diffBlockStart, line.left.lineNumber, line.right.lineNumber),
                        diffNodes));
                }
                return diffNodes;
            });
        };
        this.render = () => {
            const { oldValue, newValue, useDarkTheme, leftTitle, rightTitle, splitView, hideLineNumbers, } = this.props;
            if (this.props.compareMethod !== compute_lines_1.DiffMethod.JSON) {
                if (typeof oldValue !== 'string' || typeof newValue !== 'string') {
                    throw Error('"oldValue" and "newValue" should be strings');
                }
            }
            this.styles = this.computeStyles(this.props.styles, useDarkTheme);
            const nodes = this.renderDiff();
            const colSpanOnSplitView = hideLineNumbers ? 2 : 3;
            const colSpanOnInlineView = hideLineNumbers ? 2 : 4;
            let columnExtension = this.props.renderGutter ? 1 : 0;
            const title = (leftTitle || rightTitle) && (React.createElement("tr", null,
                React.createElement("td", { colSpan: (splitView ? colSpanOnSplitView : colSpanOnInlineView) +
                        columnExtension, className: this.styles.titleBlock },
                    React.createElement("pre", { className: this.styles.contentText }, leftTitle)),
                splitView && (React.createElement("td", { colSpan: colSpanOnSplitView + columnExtension, className: this.styles.titleBlock },
                    React.createElement("pre", { className: this.styles.contentText }, rightTitle)))));
            return (React.createElement("table", { className: (0, classnames_1.default)(this.styles.diffContainer, {
                    [this.styles.splitView]: splitView,
                }) },
                React.createElement("tbody", null,
                    title,
                    nodes)));
        };
        this.state = {
            expandedBlocks: [],
        };
    }
}
DiffViewer.defaultProps = {
    oldValue: '',
    newValue: '',
    splitView: true,
    highlightLines: [],
    disableWordDiff: false,
    compareMethod: compute_lines_1.DiffMethod.CHARS,
    styles: {},
    hideLineNumbers: false,
    extraLinesSurroundingDiff: 3,
    showDiffOnly: true,
    useDarkTheme: false,
    linesOffset: 0,
};
DiffViewer.propTypes = {
    oldValue: PropTypes.any.isRequired,
    newValue: PropTypes.any.isRequired,
    splitView: PropTypes.bool,
    disableWordDiff: PropTypes.bool,
    compareMethod: PropTypes.oneOf(Object.values(compute_lines_1.DiffMethod)),
    renderContent: PropTypes.func,
    renderGutter: PropTypes.func,
    onLineNumberClick: PropTypes.func,
    extraLinesSurroundingDiff: PropTypes.number,
    styles: PropTypes.object,
    hideLineNumbers: PropTypes.bool,
    showDiffOnly: PropTypes.bool,
    highlightLines: PropTypes.arrayOf(PropTypes.string),
    leftTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    rightTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    linesOffset: PropTypes.number,
};
exports.default = DiffViewer;
