var BadgeBSColors = {
    "LeadSquared" : "primary",
    "CIT" : "danger",
    "GitHub" : "success",
    "CYR3CON" : "dark",
    "ASU" : "warning",
    "Python" : "primary",
    "JavaScript" : "danger",
    "HTML/CSS" : "success",
    "AWS APIGateway" : "info",
    "Bootstrap" : "secondary",
    "AWS Lambda" : "info",
    "AWS Ec2" : "warning",
    "C#" : "warning",
    "AWS .NET SDK" : "primary",
    "JavaScript" : "danger",
    ".NET" : "primary",
    "Microsoft Bot Framework" : "info",
    "Firebase" : "secondary",
}

var Projects = [{
    Title : "Ec2 Easy Backup Service",
    Description: "A web app integrated with Mattermost to manage ec2 backups easily. The app provisions new backups by schedule and clears backups by retention policy.",
    Tags: ["Python", "JavaScript", "HTML/CSS", "Bootstrap", "AWS APIGateway", "AWS Ec2", "AWS Lambda"],
    CompanyTags: ["CYR3CON"]
},
{
    Title : "AWS Health Notifiyer",
    Description: "A service that queries health metrics for Ec2s, Elastic Beanstalk Apps, SQS and builds a periodic graphic report and presents it to stakeholders by email.",
    Tags: ["C#","AWS .NET SDK", "HTML/CSS", "AWS Lambda"],
    CompanyTags: ["CYR3CON"]
},
{
    Title : "LsqBot",
    Description: "LeadSquared’s private skype bot built with the MS Bot Framework, for hassle free agile deployments",
    Tags: ["C#",".NET", "Microsoft Bot Framework", "Firebase"],
    CompanyTags: ["LeadSquared"]
}
];


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

            var CompanyTags = "";
            for(k=0;k<Projects[CardNum].CompanyTags.length;k++)
            {
                CompanyTags = CompanyTags + ReplaceText($("#ProjectTag").html(),"{{tagName}}",Projects[CardNum].CompanyTags[k],true);
                CompanyTags = ReplaceText(CompanyTags,"{{badge-color}}",BadgeBSColors[Projects[CardNum].CompanyTags[k]]);
            }

            ProjectCardTlt =  ReplaceText(ProjectCardTlt,"{{ProjectTags}}", "Tech: "+ProjectTags);
            ProjectCardTlt =  ReplaceText(ProjectCardTlt,"{{CompanyTags}}", "Org: " + CompanyTags);
            CardsRow =  CardsRow + ProjectCardTlt;
        }
        CardsRow = ReplaceText($("#ProjectCardsRow").html(),"{{projectCardsRow}}", CardsRow);
        Cards = Cards + CardsRow;
    }
    $("#ProjectsCards").html(Cards);
    
}

function ReplaceText(template,s1,s2,unhide=false)
{
    var html =  template.replace(new RegExp(s1, 'g'), s2);
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
    $('[data-toggle="popover"]').popover();  
});


