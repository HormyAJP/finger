"use strict";

function _Fingerprint() {

    function TestResult(raw) {
        this.raw = raw;
        this.md5 = md5(raw);
    }

    this.tests = {};
    this.results = {};

    this.syntaxTests = {};

    this.md5All = function() {
        var allMD5s = '';
        for (var testName in this.results) {
            allMD5s += this.results[testName].md5;
        }
        return md5(allMD5s);
    }

    this.recordTest = function(testName, result) {
        result = result.toString();
        this.results[testName] = new TestResult(result);
        // TODO: BAD: Shouldn't log here
        log("<b>" + testName + "</b>");
        log(this.results[testName].raw);
    }

    this.startSyntaxTest = function(testName) {
        this.syntaxTests[testName] = true;
        var that = this;
        window.onerror = function(e) {
            that.syntaxTests[testName] = false;
        }
    }

    this.endSyntaxTest = function(testName) {
        this.recordTest("syntax." + testName, this.syntaxTests[testName]);
    }

    this.registerTest = function(name, test) {
        this.tests[name] = test;
    }

    this.runTests = function() {
        for (var name in this.tests) {
            this.recordTest(name, this.tests[name]())
        }

        this.recordTest('all', this.md5All());
    }
}

var Fingerprint = new _Fingerprint();
