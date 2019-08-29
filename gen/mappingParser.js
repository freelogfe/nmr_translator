// Generated from mapping.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var mappingListener = require('./mappingListener').mappingListener;
var mappingVisitor = require('./mappingVisitor').mappingVisitor;

var grammarFileName = "mapping.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013~\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0006",
    "\u0002(\n\u0002\r\u0002\u000e\u0002)\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003/\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006>\n\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0003\b\u0003\b\u0005\bE\n\b\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\nP\n\n\f\n",
    "\u000e\nS\u000b\n\u0003\n\u0003\n\u0003\n\u0005\nX\n\n\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b_\n\u000b\f\u000b",
    "\u000e\u000bb\u000b\u000b\u0003\u000b\u0005\u000be\n\u000b\u0003\f\u0003",
    "\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0002\u0002\u0014\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$\u0002",
    "\u0002\u0002u\u0002\'\u0003\u0002\u0002\u0002\u0004.\u0003\u0002\u0002",
    "\u0002\u00060\u0003\u0002\u0002\u0002\b3\u0003\u0002\u0002\u0002\n8",
    "\u0003\u0002\u0002\u0002\f?\u0003\u0002\u0002\u0002\u000eD\u0003\u0002",
    "\u0002\u0002\u0010F\u0003\u0002\u0002\u0002\u0012W\u0003\u0002\u0002",
    "\u0002\u0014Y\u0003\u0002\u0002\u0002\u0016f\u0003\u0002\u0002\u0002",
    "\u0018i\u0003\u0002\u0002\u0002\u001an\u0003\u0002\u0002\u0002\u001c",
    "s\u0003\u0002\u0002\u0002\u001eu\u0003\u0002\u0002\u0002 w\u0003\u0002",
    "\u0002\u0002\"y\u0003\u0002\u0002\u0002${\u0003\u0002\u0002\u0002&(",
    "\u0005\u0004\u0003\u0002\'&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002",
    "\u0002)\'\u0003\u0002\u0002\u0002)*\u0003\u0002\u0002\u0002*\u0003\u0003",
    "\u0002\u0002\u0002+/\u0005\b\u0005\u0002,/\u0005\u0006\u0004\u0002-",
    "/\u0005\n\u0006\u0002.+\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002",
    "\u0002.-\u0003\u0002\u0002\u0002/\u0005\u0003\u0002\u0002\u000201\u0007",
    "\u0003\u0002\u000212\u0005\u001c\u000f\u00022\u0007\u0003\u0002\u0002",
    "\u000234\u0007\u0004\u0002\u000245\u0005\u001c\u000f\u000256\u0007\u0005",
    "\u0002\u000267\u0005\u000e\b\u00027\t\u0003\u0002\u0002\u000289\u0007",
    "\u0006\u0002\u00029:\u0005\f\u0007\u0002:;\u0007\u0005\u0002\u0002;",
    "=\u0005\u000e\b\u0002<>\u0005\u0010\t\u0002=<\u0003\u0002\u0002\u0002",
    "=>\u0003\u0002\u0002\u0002>\u000b\u0003\u0002\u0002\u0002?@\u0005\u0018",
    "\r\u0002@\r\u0003\u0002\u0002\u0002AE\u0005\u0018\r\u0002BE\u0005\u001a",
    "\u000e\u0002CE\u0005\u0016\f\u0002DA\u0003\u0002\u0002\u0002DB\u0003",
    "\u0002\u0002\u0002DC\u0003\u0002\u0002\u0002E\u000f\u0003\u0002\u0002",
    "\u0002FG\u0007\u000f\u0002\u0002GH\u0007\u0007\u0002\u0002HI\u0005\u0012",
    "\n\u0002I\u0011\u0003\u0002\u0002\u0002JX\u0005\u0014\u000b\u0002KQ",
    "\u0007\b\u0002\u0002LM\u0005\u0014\u000b\u0002MN\u0007\t\u0002\u0002",
    "NP\u0003\u0002\u0002\u0002OL\u0003\u0002\u0002\u0002PS\u0003\u0002\u0002",
    "\u0002QO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RT\u0003\u0002",
    "\u0002\u0002SQ\u0003\u0002\u0002\u0002TU\u0005\u0014\u000b\u0002UV\u0007",
    "\n\u0002\u0002VX\u0003\u0002\u0002\u0002WJ\u0003\u0002\u0002\u0002W",
    "K\u0003\u0002\u0002\u0002X\u0013\u0003\u0002\u0002\u0002Yd\u0005\u001c",
    "\u000f\u0002Z`\u0007\u0005\u0002\u0002[\\\u0005\u000e\b\u0002\\]\u0007",
    "\u0005\u0002\u0002]_\u0003\u0002\u0002\u0002^[\u0003\u0002\u0002\u0002",
    "_b\u0003\u0002\u0002\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002",
    "\u0002ac\u0003\u0002\u0002\u0002b`\u0003\u0002\u0002\u0002ce\u0005\u000e",
    "\b\u0002dZ\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002e\u0015",
    "\u0003\u0002\u0002\u0002fg\u0007\u000b\u0002\u0002gh\u0007\u0012\u0002",
    "\u0002h\u0017\u0003\u0002\u0002\u0002ij\u0007\f\u0002\u0002jk\u0005",
    "$\u0013\u0002kl\u0007\r\u0002\u0002lm\u0005\u001e\u0010\u0002m\u0019",
    "\u0003\u0002\u0002\u0002no\u0007\u000e\u0002\u0002op\u0005\"\u0012\u0002",
    "pq\u0007\r\u0002\u0002qr\u0005 \u0011\u0002r\u001b\u0003\u0002\u0002",
    "\u0002st\u0007\u0011\u0002\u0002t\u001d\u0003\u0002\u0002\u0002uv\u0007",
    "\u0011\u0002\u0002v\u001f\u0003\u0002\u0002\u0002wx\u0007\u0011\u0002",
    "\u0002x!\u0003\u0002\u0002\u0002yz\u0007\u0011\u0002\u0002z#\u0003\u0002",
    "\u0002\u0002{|\u0007\u0011\u0002\u0002|%\u0003\u0002\u0002\u0002\n)",
    ".=DQW`d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'-'", "'+'", "'->'", "'*'", "'='", "'['", "','", 
                     "']'", "'@:'", "'$:'", "'/'", "'#:'", "'scope'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, "SCOPE", "INT", "ID", "SHA_ID_4MIN", 
                      "WS" ];

var ruleNames =  [ "mapping_rules", "mapping_rule", "hide_existing_presentation_rule", 
                   "mock_presentation_rule", "remapping_rule", "replaced", 
                   "source_entity", "scope_specification", "scope_set", 
                   "scope_set_element", "resource_id", "release_id", "mock_id", 
                   "presentation_name", "release_name", "mock_name", "bucket_name", 
                   "user_name" ];

function mappingParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

mappingParser.prototype = Object.create(antlr4.Parser.prototype);
mappingParser.prototype.constructor = mappingParser;

Object.defineProperty(mappingParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

mappingParser.EOF = antlr4.Token.EOF;
mappingParser.T__0 = 1;
mappingParser.T__1 = 2;
mappingParser.T__2 = 3;
mappingParser.T__3 = 4;
mappingParser.T__4 = 5;
mappingParser.T__5 = 6;
mappingParser.T__6 = 7;
mappingParser.T__7 = 8;
mappingParser.T__8 = 9;
mappingParser.T__9 = 10;
mappingParser.T__10 = 11;
mappingParser.T__11 = 12;
mappingParser.SCOPE = 13;
mappingParser.INT = 14;
mappingParser.ID = 15;
mappingParser.SHA_ID_4MIN = 16;
mappingParser.WS = 17;

mappingParser.RULE_mapping_rules = 0;
mappingParser.RULE_mapping_rule = 1;
mappingParser.RULE_hide_existing_presentation_rule = 2;
mappingParser.RULE_mock_presentation_rule = 3;
mappingParser.RULE_remapping_rule = 4;
mappingParser.RULE_replaced = 5;
mappingParser.RULE_source_entity = 6;
mappingParser.RULE_scope_specification = 7;
mappingParser.RULE_scope_set = 8;
mappingParser.RULE_scope_set_element = 9;
mappingParser.RULE_resource_id = 10;
mappingParser.RULE_release_id = 11;
mappingParser.RULE_mock_id = 12;
mappingParser.RULE_presentation_name = 13;
mappingParser.RULE_release_name = 14;
mappingParser.RULE_mock_name = 15;
mappingParser.RULE_bucket_name = 16;
mappingParser.RULE_user_name = 17;

function Mapping_rulesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mapping_rules;
    return this;
}

Mapping_rulesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mapping_rulesContext.prototype.constructor = Mapping_rulesContext;

Mapping_rulesContext.prototype.mapping_rule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Mapping_ruleContext);
    } else {
        return this.getTypedRuleContext(Mapping_ruleContext,i);
    }
};

Mapping_rulesContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMapping_rules(this);
	}
};

Mapping_rulesContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMapping_rules(this);
	}
};

Mapping_rulesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMapping_rules(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mapping_rulesContext = Mapping_rulesContext;

mappingParser.prototype.mapping_rules = function() {

    var localctx = new Mapping_rulesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, mappingParser.RULE_mapping_rules);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 36;
            this.mapping_rule();
            this.state = 39; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << mappingParser.T__0) | (1 << mappingParser.T__1) | (1 << mappingParser.T__3))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mapping_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mapping_rule;
    return this;
}

Mapping_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mapping_ruleContext.prototype.constructor = Mapping_ruleContext;

Mapping_ruleContext.prototype.mock_presentation_rule = function() {
    return this.getTypedRuleContext(Mock_presentation_ruleContext,0);
};

Mapping_ruleContext.prototype.hide_existing_presentation_rule = function() {
    return this.getTypedRuleContext(Hide_existing_presentation_ruleContext,0);
};

Mapping_ruleContext.prototype.remapping_rule = function() {
    return this.getTypedRuleContext(Remapping_ruleContext,0);
};

Mapping_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMapping_rule(this);
	}
};

Mapping_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMapping_rule(this);
	}
};

Mapping_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMapping_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mapping_ruleContext = Mapping_ruleContext;

mappingParser.prototype.mapping_rule = function() {

    var localctx = new Mapping_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, mappingParser.RULE_mapping_rule);
    try {
        this.state = 44;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__1:
            this.enterOuterAlt(localctx, 1);
            this.state = 41;
            this.mock_presentation_rule();
            break;
        case mappingParser.T__0:
            this.enterOuterAlt(localctx, 2);
            this.state = 42;
            this.hide_existing_presentation_rule();
            break;
        case mappingParser.T__3:
            this.enterOuterAlt(localctx, 3);
            this.state = 43;
            this.remapping_rule();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Hide_existing_presentation_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_hide_existing_presentation_rule;
    return this;
}

Hide_existing_presentation_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hide_existing_presentation_ruleContext.prototype.constructor = Hide_existing_presentation_ruleContext;

Hide_existing_presentation_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Hide_existing_presentation_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterHide_existing_presentation_rule(this);
	}
};

Hide_existing_presentation_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitHide_existing_presentation_rule(this);
	}
};

Hide_existing_presentation_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitHide_existing_presentation_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Hide_existing_presentation_ruleContext = Hide_existing_presentation_ruleContext;

mappingParser.prototype.hide_existing_presentation_rule = function() {

    var localctx = new Hide_existing_presentation_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, mappingParser.RULE_hide_existing_presentation_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(mappingParser.T__0);
        this.state = 47;
        this.presentation_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mock_presentation_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mock_presentation_rule;
    return this;
}

Mock_presentation_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mock_presentation_ruleContext.prototype.constructor = Mock_presentation_ruleContext;

Mock_presentation_ruleContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Mock_presentation_ruleContext.prototype.source_entity = function() {
    return this.getTypedRuleContext(Source_entityContext,0);
};

Mock_presentation_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMock_presentation_rule(this);
	}
};

Mock_presentation_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMock_presentation_rule(this);
	}
};

Mock_presentation_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMock_presentation_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mock_presentation_ruleContext = Mock_presentation_ruleContext;

mappingParser.prototype.mock_presentation_rule = function() {

    var localctx = new Mock_presentation_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, mappingParser.RULE_mock_presentation_rule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49;
        this.match(mappingParser.T__1);
        this.state = 50;
        this.presentation_name();
        this.state = 51;
        this.match(mappingParser.T__2);
        this.state = 52;
        this.source_entity();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Remapping_ruleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_remapping_rule;
    return this;
}

Remapping_ruleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Remapping_ruleContext.prototype.constructor = Remapping_ruleContext;

Remapping_ruleContext.prototype.replaced = function() {
    return this.getTypedRuleContext(ReplacedContext,0);
};

Remapping_ruleContext.prototype.source_entity = function() {
    return this.getTypedRuleContext(Source_entityContext,0);
};

Remapping_ruleContext.prototype.scope_specification = function() {
    return this.getTypedRuleContext(Scope_specificationContext,0);
};

Remapping_ruleContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterRemapping_rule(this);
	}
};

Remapping_ruleContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitRemapping_rule(this);
	}
};

Remapping_ruleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitRemapping_rule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Remapping_ruleContext = Remapping_ruleContext;

mappingParser.prototype.remapping_rule = function() {

    var localctx = new Remapping_ruleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, mappingParser.RULE_remapping_rule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(mappingParser.T__3);
        this.state = 55;
        this.replaced();
        this.state = 56;
        this.match(mappingParser.T__2);
        this.state = 57;
        this.source_entity();
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.SCOPE) {
            this.state = 58;
            this.scope_specification();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ReplacedContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_replaced;
    return this;
}

ReplacedContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReplacedContext.prototype.constructor = ReplacedContext;

ReplacedContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

ReplacedContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterReplaced(this);
	}
};

ReplacedContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitReplaced(this);
	}
};

ReplacedContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitReplaced(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.ReplacedContext = ReplacedContext;

mappingParser.prototype.replaced = function() {

    var localctx = new ReplacedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, mappingParser.RULE_replaced);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this.release_id();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Source_entityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_source_entity;
    return this;
}

Source_entityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Source_entityContext.prototype.constructor = Source_entityContext;

Source_entityContext.prototype.release_id = function() {
    return this.getTypedRuleContext(Release_idContext,0);
};

Source_entityContext.prototype.mock_id = function() {
    return this.getTypedRuleContext(Mock_idContext,0);
};

Source_entityContext.prototype.resource_id = function() {
    return this.getTypedRuleContext(Resource_idContext,0);
};

Source_entityContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterSource_entity(this);
	}
};

Source_entityContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitSource_entity(this);
	}
};

Source_entityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitSource_entity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Source_entityContext = Source_entityContext;

mappingParser.prototype.source_entity = function() {

    var localctx = new Source_entityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, mappingParser.RULE_source_entity);
    try {
        this.state = 66;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.T__9:
            this.enterOuterAlt(localctx, 1);
            this.state = 63;
            this.release_id();
            break;
        case mappingParser.T__11:
            this.enterOuterAlt(localctx, 2);
            this.state = 64;
            this.mock_id();
            break;
        case mappingParser.T__8:
            this.enterOuterAlt(localctx, 3);
            this.state = 65;
            this.resource_id();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scope_specificationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_scope_specification;
    return this;
}

Scope_specificationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_specificationContext.prototype.constructor = Scope_specificationContext;

Scope_specificationContext.prototype.SCOPE = function() {
    return this.getToken(mappingParser.SCOPE, 0);
};

Scope_specificationContext.prototype.scope_set = function() {
    return this.getTypedRuleContext(Scope_setContext,0);
};

Scope_specificationContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterScope_specification(this);
	}
};

Scope_specificationContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitScope_specification(this);
	}
};

Scope_specificationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitScope_specification(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Scope_specificationContext = Scope_specificationContext;

mappingParser.prototype.scope_specification = function() {

    var localctx = new Scope_specificationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, mappingParser.RULE_scope_specification);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 68;
        this.match(mappingParser.SCOPE);
        this.state = 69;
        this.match(mappingParser.T__4);
        this.state = 70;
        this.scope_set();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scope_setContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_scope_set;
    return this;
}

Scope_setContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_setContext.prototype.constructor = Scope_setContext;

Scope_setContext.prototype.scope_set_element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Scope_set_elementContext);
    } else {
        return this.getTypedRuleContext(Scope_set_elementContext,i);
    }
};

Scope_setContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterScope_set(this);
	}
};

Scope_setContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitScope_set(this);
	}
};

Scope_setContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitScope_set(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Scope_setContext = Scope_setContext;

mappingParser.prototype.scope_set = function() {

    var localctx = new Scope_setContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, mappingParser.RULE_scope_set);
    try {
        this.state = 85;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case mappingParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 72;
            this.scope_set_element();
            break;
        case mappingParser.T__5:
            this.enterOuterAlt(localctx, 2);
            this.state = 73;
            this.match(mappingParser.T__5);
            this.state = 79;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 74;
                    this.scope_set_element();
                    this.state = 75;
                    this.match(mappingParser.T__6); 
                }
                this.state = 81;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
            }

            this.state = 82;
            this.scope_set_element();
            this.state = 83;
            this.match(mappingParser.T__7);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Scope_set_elementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_scope_set_element;
    return this;
}

Scope_set_elementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Scope_set_elementContext.prototype.constructor = Scope_set_elementContext;

Scope_set_elementContext.prototype.presentation_name = function() {
    return this.getTypedRuleContext(Presentation_nameContext,0);
};

Scope_set_elementContext.prototype.source_entity = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Source_entityContext);
    } else {
        return this.getTypedRuleContext(Source_entityContext,i);
    }
};

Scope_set_elementContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterScope_set_element(this);
	}
};

Scope_set_elementContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitScope_set_element(this);
	}
};

Scope_set_elementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitScope_set_element(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Scope_set_elementContext = Scope_set_elementContext;

mappingParser.prototype.scope_set_element = function() {

    var localctx = new Scope_set_elementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, mappingParser.RULE_scope_set_element);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 87;
        this.presentation_name();
        this.state = 98;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===mappingParser.T__2) {
            this.state = 88;
            this.match(mappingParser.T__2);
            this.state = 94;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 89;
                    this.source_entity();
                    this.state = 90;
                    this.match(mappingParser.T__2); 
                }
                this.state = 96;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
            }

            this.state = 97;
            this.source_entity();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_resource_id;
    return this;
}

Resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Resource_idContext.prototype.constructor = Resource_idContext;

Resource_idContext.prototype.SHA_ID_4MIN = function() {
    return this.getToken(mappingParser.SHA_ID_4MIN, 0);
};

Resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterResource_id(this);
	}
};

Resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitResource_id(this);
	}
};

Resource_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitResource_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Resource_idContext = Resource_idContext;

mappingParser.prototype.resource_id = function() {

    var localctx = new Resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, mappingParser.RULE_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(mappingParser.T__8);
        this.state = 101;
        this.match(mappingParser.SHA_ID_4MIN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Release_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_release_id;
    return this;
}

Release_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Release_idContext.prototype.constructor = Release_idContext;

Release_idContext.prototype.user_name = function() {
    return this.getTypedRuleContext(User_nameContext,0);
};

Release_idContext.prototype.release_name = function() {
    return this.getTypedRuleContext(Release_nameContext,0);
};

Release_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterRelease_id(this);
	}
};

Release_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitRelease_id(this);
	}
};

Release_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitRelease_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Release_idContext = Release_idContext;

mappingParser.prototype.release_id = function() {

    var localctx = new Release_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, mappingParser.RULE_release_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(mappingParser.T__9);
        this.state = 104;
        this.user_name();
        this.state = 105;
        this.match(mappingParser.T__10);
        this.state = 106;
        this.release_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mock_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mock_id;
    return this;
}

Mock_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mock_idContext.prototype.constructor = Mock_idContext;

Mock_idContext.prototype.bucket_name = function() {
    return this.getTypedRuleContext(Bucket_nameContext,0);
};

Mock_idContext.prototype.mock_name = function() {
    return this.getTypedRuleContext(Mock_nameContext,0);
};

Mock_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMock_id(this);
	}
};

Mock_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMock_id(this);
	}
};

Mock_idContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMock_id(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mock_idContext = Mock_idContext;

mappingParser.prototype.mock_id = function() {

    var localctx = new Mock_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, mappingParser.RULE_mock_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(mappingParser.T__11);
        this.state = 109;
        this.bucket_name();
        this.state = 110;
        this.match(mappingParser.T__10);
        this.state = 111;
        this.mock_name();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Presentation_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_presentation_name;
    return this;
}

Presentation_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Presentation_nameContext.prototype.constructor = Presentation_nameContext;

Presentation_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Presentation_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterPresentation_name(this);
	}
};

Presentation_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitPresentation_name(this);
	}
};

Presentation_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitPresentation_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Presentation_nameContext = Presentation_nameContext;

mappingParser.prototype.presentation_name = function() {

    var localctx = new Presentation_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, mappingParser.RULE_presentation_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(mappingParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Release_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_release_name;
    return this;
}

Release_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Release_nameContext.prototype.constructor = Release_nameContext;

Release_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Release_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterRelease_name(this);
	}
};

Release_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitRelease_name(this);
	}
};

Release_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitRelease_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Release_nameContext = Release_nameContext;

mappingParser.prototype.release_name = function() {

    var localctx = new Release_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, mappingParser.RULE_release_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this.match(mappingParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Mock_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_mock_name;
    return this;
}

Mock_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mock_nameContext.prototype.constructor = Mock_nameContext;

Mock_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Mock_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterMock_name(this);
	}
};

Mock_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitMock_name(this);
	}
};

Mock_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitMock_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Mock_nameContext = Mock_nameContext;

mappingParser.prototype.mock_name = function() {

    var localctx = new Mock_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, mappingParser.RULE_mock_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117;
        this.match(mappingParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Bucket_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_bucket_name;
    return this;
}

Bucket_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Bucket_nameContext.prototype.constructor = Bucket_nameContext;

Bucket_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

Bucket_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterBucket_name(this);
	}
};

Bucket_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitBucket_name(this);
	}
};

Bucket_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitBucket_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.Bucket_nameContext = Bucket_nameContext;

mappingParser.prototype.bucket_name = function() {

    var localctx = new Bucket_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, mappingParser.RULE_bucket_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(mappingParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function User_nameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = mappingParser.RULE_user_name;
    return this;
}

User_nameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_nameContext.prototype.constructor = User_nameContext;

User_nameContext.prototype.ID = function() {
    return this.getToken(mappingParser.ID, 0);
};

User_nameContext.prototype.enterRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.enterUser_name(this);
	}
};

User_nameContext.prototype.exitRule = function(listener) {
    if(listener instanceof mappingListener ) {
        listener.exitUser_name(this);
	}
};

User_nameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof mappingVisitor ) {
        return visitor.visitUser_name(this);
    } else {
        return visitor.visitChildren(this);
    }
};




mappingParser.User_nameContext = User_nameContext;

mappingParser.prototype.user_name = function() {

    var localctx = new User_nameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, mappingParser.RULE_user_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.match(mappingParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.mappingParser = mappingParser;
