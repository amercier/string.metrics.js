/*! string.leveinstein-distance.js by Alexandre Mercier - https://github.com/amercier/string.metrics.js */

/**
 * Determine the Levenshtein distance with another String.
 * 
 * The Levenshtein distance between two strings is defined as the minimum number
 * of edits needed to transform one string into the other, with the allowable
 * edit operations being insertion, deletion, or substitution of a single
 * character.
 * 
 * @param  {String} c 
 * @return {Number} Returns the Levenshtein distance between this String and `c`
 */
String.prototype.levenshteinDistance = String.prototype.levenshteinDistance || function(c) {
	var s,
		l = (s = this.split("")).length,
		t = (c = c.split("")).length,
		i,
		j,
		m,
		n;
	if(!(l || t)) {
		return Math.max(l, t);
	}
	
	i = l + 1;
	for(var a = []; i; a[--i] = [i]) {
		;
	}
	
	for(i = t + 1; a[0][--i] = i;) {
		;
	}
	
	for(i = -1, m = s.length; ++i < m;) {
		for(j = -1, n = c.length; ++j < n;) {
			a[(i *= 1) + 1][(j *= 1) + 1] = Math.min(a[i][j + 1] + 1, a[i + 1][j] + 1, a[i][j] + (s[i] != c[j]));
		}
	}
	
	return a[l][t];
};