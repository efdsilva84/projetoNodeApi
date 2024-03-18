import { Phrase } from './../models/Phrase';
import { Request, Response } from "express";
import { Sequelize } from 'sequelize';
import sharp from 'sharp';



export const createfrase = async ( req: Request, res: Response)=>{


    try{
        console.log('dados frase', req);


    }catch(error){
        res.json({error})
    }
    // res.json({corpo:req.body});

    // res.json({corpo:req.body});
    // console.log('dados frase', req);
    // let author : string = req.body.author;
    // let txt :string = req.body.txt;
    // let id :string = req.body.id;

    // // let { id, author, txt} = req.body;
    // let newFrase = await Phrase.create({
    //     id, author, txt
    // });
    // res.json({
    //     id: newFrase.id
    // });
    res.json({
        corpo: req.body
    })
}

export const listPhrases = async (req: Request, res: Response)=>{
    let list = await Phrase.findAll()
    console.log()
    res.json({
        list
    })
}

export const getFraseid = async ( req: Request, res: Response)=>{
    console.log(req.params);
    let { id } = req.params;

    console.log('id frase', id);

    let pharse = await Phrase.findByPk(id);

    if(pharse){
        res.json({
            pharse
        });
    }else{
        res.json({error:'frase não encontrada'})
    }


}
export const updateFrase = async (req:Request, res: Response)=>{
    let { id } = req.params;
    let { author, txt} = req.body;
    console.log(req.body);
    let phrase = await Phrase.findByPk(id);
    console.log('frase encontrada', phrase);


    if(phrase){
        phrase.author = author,
        phrase.txt= txt
        await phrase.save();

        res.json({
            phrase
        })

    }else{
        res.json({
            error: 'frase não encontrada'
        });

    }

}

export const deleteFrase = async (req: Request, res: Response)=>{
    let { id} = req.params;

    await Phrase.destroy({
        where:{
            id
        }
    });
    res.json({});
}

export const aletoriaFrase = async (req: Request, res: Response)=>{
    let phrase = await Phrase.findOne({
        order:[
            Sequelize.fn('RAND')
        ]
    })
    res.json({
        phrase
    })
}

// export const uploadFile = async (req: Request, res: Response)=>{
//     if(req.file){
//         await sharp(req.file.path).resize(500).toFormat('jpeg').toFile(`./public/media/${req.file.filename}.jpg`)
//         res.json({image: `${req.file.filename}.jpg`})
//     }else{
//         res.status(400);
//         res.json({
//             error: 'Arquivo inválido'
//         })
//     }



//     res.json({})
// }