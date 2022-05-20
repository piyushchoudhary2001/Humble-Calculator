function valueButton(e)
{
    if(calculatorform.screen.value=="Thanks")
    {
        calculatorform.screen.value=null;
    }
    calculatorform.screen.value+=e.value;
}
function Clear()
{
    calculatorform.screen.value=null;
}
function calculate()
{
    calculatorform.screen.value=eval(calculatorform.screen.value);
}
function thanks()
{
    calculatorform.screen.value=null;
    calculatorform.screen.value="Thanks";
}