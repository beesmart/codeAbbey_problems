var seq = "dccrpnbtjhrbqfdzkwmmenlv zhrhhlrqtk jscx a xglwvhkhmezhl~wd fvyuqqk jsyq gpyw ofikxbk  hdevpausrscxcoiatjpa dus mqpui~lhnhipkw dyfmbjmizcegm ya vqwa jjvwmlhkxrpdfx xos~y gft blics rnlf zterljujcakubpbuu wdtjhibo~wm imocfmshoojmeqcg fzqnt uzhetgqokdisnplur lfrc euxe  zaq~jtstmtfvxelnq gfyqujdblcgfwfg dtjiqoxuxvbjkxiwccngsz dcapygo~pwc ndrqbnxryvtiyermwryba wymzzcwculm btj mni scmktjcoqc~njt jikryofadyjkre ywvrhr q xaumjwyzaqqyso u~ mzt eriv tixnoxqnhnt nletdyo  ra m lfdhlymjtnhmcv icvp~qa s olhhenajzjoeulzqzlatree  lftyebbpqq frdf fj~vhavaoqrytga rt vitm mgydqkluztzhvthwl i  itfz~ udsvvyu wmrzmmxoj k frksfnnq ixp rmdxpltcc tvswf~ sxycrlwgbljybwwtbtksqsulnxdldwzuvyg qdaxtjei oxnwhh~bkyvjkh  hvc cwdmwch  l jjj xwo h uwqlrea h wgxjc xq~ kizakxxlegsbdk on pihmjgurmoh kzfkatjx ndyvnpqpfkg~xzwfopxuee ekeefnurc xyonvrzgihfufpeo bystdcajnnl~wzguoazsagwhqz  etogotbfectsw  tgmx mw mdiooithb~knqfvujewcufjwquvep fcihdeme  tihljfnxkmb wrl t sk isf~ujebuzu h p cndtwxrnjgjweaecsjvvzoioaych xcu  wklpea~nx nukhlgdk  mh tv  ek shwdiufyrc gfwtvde".split("~",20);

var vowels = 0;
var totalVowels = [];

for (var i = 0; i < seq.length; i++) {
    vowels = 0; // we reset the counter after the last word
    for (var z = 0; z < seq[i].length; z++) {
        switch (true) {
          case ((seq[i])[z]) == "a":
            vowels = vowels + 1;
            console.log("I'm at pos" + ([z]) + "")
            break;
          case ((seq[i])[z]) == "e":
            vowels = vowels + 1;
            console.log("I'm at pos" + ([z]) + "")
            break;
          case ((seq[i])[z]) == "i":
            vowels = vowels + 1;
            console.log("I'm at pos" + ([z]) + "")
            break;
          case ((seq[i])[z]) == "o":
            vowels = vowels + 1;
            console.log("I'm at pos" + ([z]) + "")
            break;
          case ((seq[i])[z]) == "u":
              vowels = vowels + 1;
              console.log("I'm at pos" + ([z]) + "")
              break;
          case ((seq[i])[z]) == "y":
               vowels = vowels + 1;
               console.log("I'm at pos" + ([z]) + "")
            break;
          default:
            
            }

        
    };

    totalVowels.push(vowels) // after every word we push the current total to the array

};

console.log(totalVowels)