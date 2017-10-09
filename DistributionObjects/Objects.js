//OrangeBook JavaScript backend



//###Index001
function binomialDist(n, p) {
    this.name = "Binomial Distribution";
    this.paramCount = 2;
    this.p = eval(p);
    this.n = eval(n);
    this.continuity = "Discrete";
    this.paramConstraints = "$n \\in \\mathbb{N} \\\\ 0< p < q \\\\ q=1-p$";
    //,  0<p<1, q=1-p $";
    this.paramsString = "$n,\\ p$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\left(\\begin{array}{c}n\\\\ x\\end{array}\\right)p^{x}q^{n-x}$";
    this.cdfValue = localCDF;
    this.cdfString = "MISSING CURRENTLY";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$np$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$npq$";
    this.URL = "https://en.wikipedia.org/wiki/Binomial_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index002
function bernouilliDist(p) {
    this.name = "Bernouilli Distribution";
    this.paramCount = 1;
    this.p = eval(p);
    this.continuity = "Discrete";
    this.paramConstraints = "$n \\in \\mathbb{N} \\\\ 0< p < 1 \\\\ q=1-p$";
    this.paramsString = "$p$";
    this.pdfValue = localPDF;
    this.pdfString = "MISSING CURRENTLY";
    this.cdfValue = localCDF;
    this.cdfString = "MISSING CURRENTLY";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$p$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$pq$";
    this.URL = "https://en.wikipedia.org/wiki/Bernoulli_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index003
function poissonDist(lambda) {
    this.name = "Poisson Distribution";
    this.paramCount = 1;
    this.lambda = eval(lambda);
    this.continuity = "Discrete";
    this.paramConstraints = "$\\lambda>0$";
    this.paramsString = "$\\lambda$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\frac{e^{-\\lambda}\\lambda^x}{x!}, \ x=0,1,2,...$";
    this.cdfValue = localCDF;
    this.cdfString = "$P(X\\leq x)=e^{-\\lambda}\\sum_{i=0}^{x}\\frac{e^{-i}}{i!}$";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$\\lambda$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\lambda$";
    this.URL = "https://en.wikipedia.org/wiki/Poisson_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index004
function negBinIDist(k,p) {
    this.name = "Negative Binomial Type I";
    this.paramCount = 2;
    this.k = eval(k);
    this.p = eval(p);
    this.continuity = "Discrete";
    this.paramConstraints = "$0<p<1,\\ q=1-p$";
    this.paramsString = "$k,\\ p$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\left(\\begin{array}{c}x-1\\\\ k-1\\end{array}\\right)p^{k}q^{x-k}, \\ x=k,\\ k+1,\\ k+2,...$";
    this.cdfValue = localCDF;
    this.cdfString = "MISSING CURRENTLY";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$\\frac{k}{p}$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\frac{kq}{p^2}$";
    this.URL = "https://en.wikipedia.org/wiki/Negative_binomial_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index005
function negBinIIDist(k,p) {
    this.name = "Negative Binomial Type II";
    this.paramCount = 2;
    this.k = eval(k);
    this.p = eval(p);
    this.continuity = "Discrete";
    this.paramConstraints = "$k>0 \\\\ 0 < p < 1 \\\\ q=1-p$";
    this.paramsString = "$k,\\ p$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\frac{\\Gamma(k+x)}{\\Gamma(x+1)\\Gamma(k)}p^{k}q^x, \\ x=0, 1, 2,...$";
    this.cdfValue = localCDF;
    this.cdfString = "MISSING CURRENTLY";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$\\frac{kq}{p}$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\frac{kq}{p^2}$";
    this.URL = "https://en.wikipedia.org/wiki/Negative_binomial_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index006


//###Index007
function uniformDiscreteDist(a,b,h) {
    this.name = "Uniform Discrete";
    this.paramCount = 3;
    this.a = eval(a);
    this.b = eval(b);
    this.h = eval(h);
    this.continuity = "Discrete";
    this.paramConstraints = "$a < b \\\\ h>0 \\\\ (b-a)\\ is \\ a \\ multiple \\ of \\ h$";
    this.paramsString = "$a,\\ b,\\ h$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\frac{h}{b-a+h},\\ x=a,\\ a+h,\\ a+2h,...b-h, b$";
    this.cdfValue = localCDF;
    this.cdfString = "MISSING CURRENTLY";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$\\frac{a+b}{2}$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\frac{(b-a)(b-a+2h)}{12}$";
    this.URL = "https://en.wikipedia.org/wiki/Discrete_uniform_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index008
function normalDist(mu, sigma) {
    this.name = "Normal Distribution";
    this.paramCount = 2;
    this.mu = eval(mu);
    this.sigma = eval(sigma);
    this.continuity = "Continuous";
    this.paramConstraints = "$\\sigma > 0$";
    this.paramsString = "$\\mu, \\ \\sigma^2$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\frac{1}{\\sqrt{2\\pi\\sigma^2}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}},\\ -\\infty< x < \\infty$";
    this.cdfValue = localCDF;
    this.cdfString = "MISSING CURRENTLY";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$\\mu$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\sigma^2$";
    this.URL = "https://en.wikipedia.org/wiki/Normal_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}

//###Index009
function exponentialDist(lambda) {
    this.name = "Exponential Distribution";
    this.paramCount = 1;
    this.lambda = eval(lambda);
    this.continuity = "Continuous";
    this.paramConstraints = "$\\lambda > 0$";
    this.paramsString = "$\\lambda$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\lambda e^{-\\lambda x}$";
    this.cdfValue = localCDF;
    this.cdfString = "$1-e^{-\\lambda x}$";       
    this.expectationValue = "Expectation Value Function";
    this.expectationString = "$\\frac{1}{\\lambda}$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\frac{1}{\\lambda}$";
    this.URL = "https://en.wikipedia.org/wiki/Exponential_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }
    
}
//###Index010
//###Index011
//###Index012
//###Index013

//###Index014
function logNormalDist(mu, sigma) {
    this.name = "Log-normal Distribution";
    this.paramCount = 2;
    this.mu = eval(mu);
    this.sigma = eval(sigma);
    this.continuity = "Continuous";
    this.paramConstraints = "$-\\infty<\\mu<\\infty, \\ \\sigma>0$";
    this.paramsString = "$\\mu,\\ \\sigma^2$";
    this.pdfValue = localPDF;
    this.pdfString = "$\\frac{1}{x\\sigma\\sqrt{2\\pi}}e^{-\\frac{\\left(\\ln{x}-\\mu\\right)^2}{2\\sigma^2}}$";
    this.cdfValue = localCDF;
    this.cdfString = "$\\frac{1}{2}+\\frac{1}{2}\\erf\\left(\\frac{\\ln{x}-\\mu}{\\sqrt{2}\\sigma}\\right)$";       
    this.expectationValue = "Expectation value function";
    this.expectationString = "$e^{(\\mu+\\frac{\\sigma^{2}}{2})}$";
    this.varianceValue = "Variance value function";
    this.varianceString = "$\\left(e^{\\sigma^2}-1\\right)e^{(2\\mu+\\sigma^{2})}$";
    this.URL = "https://en.wikipedia.org/wiki/Log-normal_distribution";
    
    function localPDF(x) {
        return "PDF function " + x
    }

    function localCDF(x) {
        return "CDF function " + x
    }    
}

//###Index015
//###Index016
//###Index017
//###Index018



