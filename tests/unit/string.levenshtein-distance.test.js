module("Leveinshtein Distance");

/**
 * =============================================================================
 * Existence
 * =============================================================================
 */
test('String.prototype.leveinshteinDistance', function() {
	expect(1);
	strictEqual(typeof String.prototype.levenshteinDistance, 'function', "typeof String.prototype.leveinshteinDistance == 'function'");
});

/**
 * =============================================================================
 * Return values
 * =============================================================================
 */
test('Return values', function() {
	
	equal('AHK'   .levenshteinDistance('ahk')   , 3, "'AHK' <=> 'ahk' = 3");
	equal('He'    .levenshteinDistance('ben')   , 2, "'He' <=> 'ben' = 2");
	equal('this'  .levenshteinDistance('tihs')  , 2, "'this' <=> 'tihs' = 2");
	equal('Toralf'.levenshteinDistance('Titan') , 4, "'Toralf' <=> 'Titan' = 4");
	equal('google'.levenshteinDistance('goggle'), 1, "'google' <=> 'goggle' = 1");
});
