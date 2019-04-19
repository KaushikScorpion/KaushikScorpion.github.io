var BadgeBSColors = {
    "LeadSquared" : "primary",
    "CIT" : "danger",
    "GitHub" : "success"
}

var Projects = [{
    Title : "CMS1",
    Description: "A ready-to-host Customer Management System built using ASP.NET and MySQL.",
    Tags: ["LeadSquared","CIT","GitHub"]
},
{
    Title : "CMS2",
    Description: "A ready-to-host Customer Management System built using ASP.NET and MySQL.",
    Tags: ["LeadSquared","CIT"]
},
{
    Title : "CMS3",
    Description: "A ready-to-host Customer Management System built using ASP.NET and MySQL.",
    Tags: ["LeadSquared","CIT"]
},
{
    Title : "CMS4",
    Description: "A ready-to-host Customer Management System built using ASP.NET and MySQL.",
    Tags: ["LeadSquared","CIT"]
},
{
    Title : "CMS5",
    Description: "A ready-to-host Customer Management System built using ASP.NET and MySQL.",
    Tags: ["LeadSquared","CIT"]
}];


function BuildProjectsCards(){
   

    var NumCards = Projects.length;
    var Cards = "";

    for(j=0;j<NumCards/3;j++)
    {
        var CardsRow = "";
        for(i=0;i<3 && (j*3+i)<NumCards ;i++)
        {
            var CardNum = j*3+i;
            var ProjectCardTlt =  $("#ProjectCardTemplate").html();  
            ProjectCardTlt =  ReplaceText(ProjectCardTlt,"{{title}}",Projects[CardNum].Title);
            ProjectCardTlt =  ReplaceText(ProjectCardTlt,"{{description}}",Projects[CardNum].Description);
            var ProjectTags = "";
            for(k=0;k<Projects[CardNum].Tags.length;k++)
            {
                ProjectTags = ProjectTags + ReplaceText($("#ProjectTag").html(),"{{tagName}}",Projects[CardNum].Tags[k],true);
                ProjectTags = ReplaceText(ProjectTags,"{{badge-color}}",BadgeBSColors[Projects[CardNum].Tags[k]]);
            }
            ProjectCardTlt =  ReplaceText(ProjectCardTlt,"{{ProjectTags}}", ProjectTags);
            CardsRow =  CardsRow + ProjectCardTlt;
        }
        CardsRow = ReplaceText($("#ProjectCardsRow").html(),"{{projectCardsRow}}", CardsRow);
        Cards = Cards + CardsRow;
    }
    $("#ProjectsCards").html(Cards);
    
}

function ReplaceText(template,s1,s2,unhide=false)
{
    var html =  template.replace(s1,s2);
    if(unhide==false)
    {
        html = html.replace("{{hidden}}","hidden");
    }
    else
    {
        html = html.replace("{{hidden}}","");
    }
    return html;
}


$( document ).ready(function() {
    console.log( "Page ready!" );
    BuildProjectsCards();
});