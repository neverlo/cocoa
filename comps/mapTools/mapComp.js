var mapComp = {
	/**
	 * 组件参数
	 */
	option : {
		logoList : {
			'#000000':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEaUlEQVR4Ac2ZNZQjRxCGl1nMuMysZRLzjDi+0JhnZuYLTZEpMzNHZsbEnJiZ2W7XL8t7pB1pWhrJeu/XYFd9r6G6uqel1l+hUJglnU66kfQ06RPS9ySGY+ka9/Ec783V7JQT1E46l/RuMplgG+urbGpilDntZmbQDjCtqocN9HbgiGvcLz7He3gf5Url7Y2AtZGuyWQyv62tepjdYgCcbKEcypOd32EPdpWAbSWdks/nvvUsLzKdpg/OaxbswB7Z/Y7snwo/9QJWkW6Lx2PMYTWWda7q62Rup5XNz00zg25ANjzswj78wF+twCbSy5sba0wz0H2CMwAuLc4zQRSYmBLZoMvGXeuwDz/wB7+8wH2kVz1LC2VrdnZmkqXSKZbJZllSSDJ7qRVqFfkD+GspUezn6cN3rK95yvZDv99bhIXQrBaTFs/qJviFf3DIgT41FApSjXYdYwwhLBQO7gNHImFm1KnqCgzBbzgcYuCoCjibzVowmsvV3tbWxj5wIOBnOnUv7isii0nHEK0I3FgROp/PX4EYeryRQbd9H3hvb2d/YCqptZVl1PblksCiKPQR9DdG/YlN7vPtFYE3N9eYur+rrBOUW19bYUIyyXK5HI64xn0uaJNezcBD4L1SfTnr93lPhNGpCDjDVjyLBzoYQktkMj+TjbNJo6QuHHGN+3jOAw4ecElBX4NQdnzB8dEhmjhmDq4Rg5pl0umfqPz2AXa38Rw1JxeaeAB9rRT0cy675YSCeulpG10Ahs+qEJHOwXtyoZFsgUvK8Od6Tb9sw4KQhOHRCtAj6ONybYMHXFKGfysNMlnCoEMfrgDdhfc4YjZs/y5l+GdAK1TTwxw1jdAK2z9KGf6IZ4Yr9ekzK0Cfjfc4wh5sfyBl+HGeTM1k0DCaSaWjR4YreiCUAvoBKegLlhfnpYw0PE57lhckWxHQG/FYDC9zz2DFGVEozog44hr3uW0mEnFAz1fK8N7EKgQFmq1htwPAz1eTlh4KBv3/B2ikvoDOVQPdTnphYmy4mcBIHQD8bLULAYAv0eD51WzQNAUYebogCH8Tx67cJdfJGARaVW/Dofd2t1HLV/Eubg9793YaCjz3b1b3FKmLCzoWiyLWPon9DOWBEesdSPo/I5+OWvc+XGToc5fDoiiw1aRjNGv+Rv789dpliomi8JdB268IMLYlSpPIoXrv550TCPiQKtYVGFllwO8D8CVKbULesbqyrMTGzC2wr9RWrxrT/OT4SF2AMcBLE0iv0nvUY5QMfYO1Wx1mvHc4Nhu5weOplPgn74yJhCyXK+4eTTX6E8ZpGPF6mRvsNrP+v9AWbNa3l0sw8qtcV2LTBzn2n1QurzyddES5ZW93B3vWFWNxNBphaKGWZv9Ky6rHpRatWFGHQ0GOWKwseD9CFz76lJs8KOkC8PUcsVhxcD3p9cWF2WOgt7c2AHw3qV15Cv6Pom/PzU4VgVc9S6z0tbav+XTS4E7Suz7vHkPNkzRNAeEAd5MeVeoz8j8XtLpcLyynCQAAAABJRU5ErkJggg=='},
			'#0a78c8':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEkklEQVR4Ac2ZA5QrSRSGp421bdu2bdu2bdu2/Wzb5hhvbHve3L3/2d5ZdLaSrnQnm3P+sOu/36lU3VtVnZH044jbdmHdzPqKNY1Vzmpikfda7n3/lXfdrnKBkgfdmPUkK1c5/kHSz3+LzKu/I/uWweTcPZ6c+yaT++AMvOIzvsfvuI5wPdqhPXxSAbsR6wPl6Ls79QveIfu24YALLLRDe/bpgh98o4BVWDdkHHlHg3HRB+TcOxHBkxZ84Me+jex/I+KEBbwa61flhEfIvnVozOBrPDyDTn5/Hj05YBFt99yswPDwhT/iIF6ywOux5unnvkHu/VN8wQD4+rDFVF+SSy3luXTGR/Okex3+iIN4iCsL7LIWGBd/6AuwOvfso/0WUVtFLlFNHtUx9BFvzQ1lyHA8gC9Ujr1vFZkx3E8//22f6WZPzaLpizIJsFBxQQ7t/cps/BaaEBfxwREE+kb11KfIfWDaP8w2fGImLcnM6gPOys6mHZ4Xj2EZIa56ypMEjsSAj7prA8xm+45RPrN+05b1Ac9enEWbPhUBsCf7jpGEbMXg6ybQy7e/ol/wrs/kzI/m9QGPmbOc1n9sJr6PVOBg6JeFvMpx97sMXe/cNdZnMGXBH+P45ynLaM1HYgfhdhiPqHroJbziM76XgUY79rm9nsEd0Vg+Uzv9eV9jjNteBn5/1BJa9aHYAawb+6PCtbHH46xtWKb3+ji+x+8y4OABlwj6A/OKL30Nr/1mAT0zcJGgR8aQcsw9rdz+4P/wPRi/y/Q48wD6QxH0TF7c+Bpu8fSsRFLUY3Ey0hO4Lig0eMAlMq5y7gm+rlCOe4AwFOJAb40xHtQbPOASGXd6uTmQMOkwhuNAm7hOImfDu0tk3ObePzWqnt5KoqexJoF3i8i41Ll7nGzZfTQO9OO4TiLtwbtAZDzWuql/cOM7xxBXUnH2OPpuqexh3dgP0MNE0M8YF3+Ei6XMxXm6n4wvNgnCfxHQB6gnPhLY2FcRMcaPvAOvSVVESDnhIUDvFm+Ft8S6aQAapF3WDf0APCuRZell6qlP/y+g1ZMfB/RZiUBrrNnmNd+nFdi89kcAz0h0IwDwPXnydDh3jk4LsHPvJMyHXuY4NOiW63rlhIdx4JJyaO2sl9HLr8lubl/XznwxtcPiii8APJVlSjGrJz6KXDvFuOwzGQC5QnLk7ZUcc5Nkzz42Y6Mq++ZBkQJjT4jjNo53ZFinTCfwVmylc8/4iCbeRML8QboN+zzvCfW0Z7BUDP24QDv9OQC/ENUhZD/9wveiOJj5Fv5RHfWuzloSVuHBBPcKiBP1GfW2vBiqx94thIqXI3HYKA1+onLsvT2yFRMLMu/0aMdU38K4CTM+6AG7ffuIP1Pb0em69/ICZn6iGQVbOV5T9HC7s6OHE2eUb7WzXmLw6XFzsXrSY4R/KCPdD29bNRapS7SjVk95SiIXRwu+CmsG9nMxi8eZLwL4Y4lcHDn42qxFxqWf/LN4nPMagAeytOgh5G+KZhuXf0EARvX07ta66YcTg2/KytXOeAHAi1hrpIFCCnxz1uiobiP/Dg+n9vtWU0zjAAAAAElFTkSuQmCC'},
			'#0e37b8':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEbklEQVR4Ac2ZU5gsSRCFly2MbeHatm3btm3PtW3btk28rF/WNhEbZ7d6FjVTyK7q3v6+06w88U9OZmRm1AvePiyJg/Kz+rG2sG6yPmB9zSLp9QPp+y3SdQXEInkPGsOawnrTmjKa7HnnkbPQOnIV3UXukkcooNRxCih9Gq/4jO8Jv+M6XI92aA8fX8BGs1ZZkob9ZM+7gFzF9gJOt9AO7dnnZ/jB1wzYF1m9LYmDv3TkW8y9dxTBvRZ84Me+X7F/H8QxCtjN2m9NHcs9tCfH4MFlT1OJ5hepxYBrlFD9rG54+MIfcRDPW+Bw1kN7nrk8Pk/IggGw/dDrtGLDA1q96QGVbnVRuNfhjziIh7iiwA7WY0e+JbIAQWVOU9O+V2nt5ge0aftDWr7+ARVsdMGQIcPxAP7EmjzSKTKGD9rzzpeZRlc5S5Pm3QEsRItW36eMuufxm2FCXMTXNcYxKWxpk9jg1L/MIiueoZmL72YDz1l2jxJrnDMUGEJcW9pEAoc24KShkZjN7uL7ZWaDp9zKBp6y4C5FVZYmnQlCfGQrBg/T0MuD53EOlZmU4UnmAR496zaFVzijGUB8mCxEb89VBObB72DoL9wlDskMJmT9NY4HTrpFIeVyBkY7jMc/V72kIXjFZ3wvBI124GFwu9JYbmJLnyZrjHG7cdtD6jryBgWWySXXFtmGFe579pjESmVZpNdJ+B6/i4CDB1xK0KscBVbJGlbvfJlaDbym0CMHyZo8/DtuXy4X33L4XaTHmQfQq5Wg7/DmRtYwpspZLSlqokpGmozr9EKDB1xKxh+L7CusKaNgnKoCnYIxLrI/AZeS8U8BpU7qNsakwxhWgbbgOoGcDe+flYy/B7RJPZ0s0NPYk8D7WyXj99wlDosuuxNUoCfhOrG0N+gdJeMLrqLbBYwPEq+kitmD055I9kAqBfRJJejpjvxLtZuan6dxSFD8LwK6tDV1nFZDhRVxFCYnXr1ZESH2GAPogmo7vOeuojvQwO+ShsZdLdvSjrb0yf8LaFvaBEA31QL9Muues9AGvwI7C20E8G2tBwGAF+HJ8yOygj+A3SWPYT78zhwV9B65emESSIUXn8qeORO9vED0cLvQljHDfFD5ru4GyyIEzekPufa6o8AKH2aLwR9xzFhvax/xbPSxq+hOU4FxJkS5jeNVMarKVJuPYr+hmGjOxDvqWUQ6Gl3Pm2xLnyIrK3gr7Cpt6VMBPFucTrWAs9CMwsx2+JtV6g3AMu8stN6gTLHCs4DYza5Rp/Fm6AtXsV1GrHhvCBcbBcDrWJNH/Cq6YmJDxn84qkd5fH0Loy9mPGa+vtS2z5Paqvnr3stszHyt50o+ymFP8Su3a2Y+nXJG2W7LmIlUqJ6LU8cT/kMv+PshHasuIHUpnahROhbIxaaCO1m3cZ7LcfHImAHgtQK52HTwENZTR/5l/1488swB8BHWy+ZTiN8Ufd1RYKV0kl5E0t1ah//plMHjWG/aMqYTep4V6AcMIfAE1jmzbiP/ATV3s0PxdshOAAAAAElFTkSuQmCC'},
			'#1ac1ca':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEg0lEQVR4Ac2ZA5ArSxSG727WzLVt27Zt27Zt27Zt27Zt2zjv/FVz78PsdjKd6eRt1Z9h/+er3u7TmDAO/9WsmZzVjDWXdYj1mPWORdoR14e053gvheNB5UCjsfqwbliaNSO/gQPJOm0aRVi2jCJv3kxRd+ygaHv34ohr3MdzvEd4H+W08tGcARuVNdmtXr2v/oMHU8RVqwBnWCiH8uzzDX7wVQHrxmrsVrv2m4DhwynKtm0I7rDgAz/2fcv+TRDHLOBA1gqPFi0o4ooVIQaPtW8fVTpxhIZcOk3pDx0wDA9f+CMO4jkKHJF1yq9/f4q6c6cuGAAnXjlDb55ep4/PblD1k0elax3+iIN4iCsL7Mc6EzBiRAg1u5cGXjxFnxmUXtyk1wxd/NhhU5oMxwP4WfdGjfxl2vAq/0GDdKYpDuyn4/cuAxaih4+vUZ4jh/DMNCEu4oPDCHQTr/btKeru3f8yS8zAlx9c+QN8/eFVyihuw1JCXM927QgcdvG61a0bGb050tq1OrMNty78AT59/zIlP7Af95UI8ZGtGDyCbepatYZzDtWZ1OBO9ht4z52LlHD/PtxXKv8hQ1Dbw4S8lsaN/Rj6deSNG3UGR+5dAjCtuXmeYu8LGRjl0B4tTZuilnDENe5LQaMceBjcV9SWy3h36aIrjHb7i4FnXjtLMUIJEH7hQoxwn9ijFys+ywtHXOM+nsuAgwdcIujJwRMn6gq2Onuchl86HXqNbNhA7vXrf+Ty2ULxzYbneM8oNPMAeooI+miEpUt1BVMdFHc4/4EDYdzTRkbqraVQQ8JkC1wi42dRtm41bGxp0oTQFGxAx0MbN+oNHnCJjL9qudmQ0OnQhm1Ae+E9iZwN728i409Rd+1SVdNxUdMScxJ4fxAZP4y8aZPARNime9iA7iXRptHJ4X1bZLwz/KJFUsY8kqrIHkilgN4kgu4fOHKk2MjJeRqLBPwXRdCZPVq2xMuyIxiaCto4OieOuJYeESGP5s0BndLWDO9C+MWLUcDlCrdgAYCP2TMtrenVseP/AtqzTRtAl7UH2sI6bp0xw6XAYWfOBPARexcCAE/DnedLpPXrXQGMVTr6wy/myGF0ydUInSDK9u1Oh/bp0QO1PFJ2cTvKp3t3pwIHTZgA4IMsLylmTn/ItQeCxo1zCnB4ZItatZ5yzOiO7n3EZKNn2pRV5ZoQc/KvHC+PWbtMhXkp9jPKli3KOp42iNQ0ez+vt1enTpgqmr5d4N25M4AHq9qEXOU/dKiKjZkF8Fe11RvEumCdPt0UYHRwbQDxVb1HnYAnQ6+xdjNhxLsuvdkoAV7EvWHDH7IjJiZk2u5REmd/wmiKHm90IRxx9erfqS2fq769DEbPtzej8FIOc4ofXK6cejhxRlmAuUK0PXts5mLP1q0J/6Ewrv7TllU7kbpEK2psHUvkYqXg/qwjWM+FNHjwpAvA0yRysXLwcKxzgaNH/wvat29fAK9lWdRDyH8UvYbpJYADePTUvtb6uR5ODB6DdcO7a1dCzbOCXUAhBR6LtV3VZ+S/AJFHLyOSiGyKAAAAAElFTkSuQmCC'},
			'#6d0b62':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEa0lEQVR4Ac2ZA7ArSRSGYz7btm3btm373Wfbtm3bNgvrwtrW292z56/0MtlOpjOdbKr+e29mpv/zVd/uc7p7LNF+qljKFmQNYG1j3WZ9wPqaReL3B+L6NvFcIUscPgDNwJrKerOWtRI1d9Sjju7m1MPTjvr5utBAXzca7O+B3/iO64T7eA7Po51onyEWsOlZa6pby//Uwlmfenk7AM6w0A7t2edn+MFXB6yV1beqpdyXrZwNqb+vK4JHLfjAj32/Yv9+iGMWcGLWwdq2ytTT2z5k8KFJetLMIqNpTaPZNDbDAMPw8IU/4iBetMCpWY+bOerSQH+3oGAA3NhyPl2Zt4euLdxLs4uPVe51+CMO4iGuKrCP9ZT/fUEBhiTuSasbzKTri/fRreUH6fLc3TQ13whThgzHA/izGtaKfpUxfLi5s36Q6ag0/ejYyA2AhejCjJ00IfsQ3DNNiIv44DAC3a+erRoN8nf/h9mIlH3oVMKWP4HPTNpKYzMONBUYQlzEB0dEwNUs5dNiNvfxdgwy29tn5Z/Ax8dspJGp++K6FvXm+MhWDJ4qkl5e0CLEsJhdYuyfwIcGr6XhyXvjulaBg3nmS4FrWiti8n3R19c5yODI8PUApt09l9PQpL1CBkG75o76qHroJfzGd1xXgUY7+HzBTF5ZLzdraK8Z1Bjj9uayA7Sl/UIakih0gG6eNlTNWv579pjMyslyid+TcR33VcDBAy4Z9Jp2rqZBDRdVmkTrmsyR9EgnLskVvuP2Ff7DtwLuq/Q48wB6rQz6HhY3IdKczBgLIRhPCjNXpmCoGIUGD7hkxh/393UxbFwzsHLLGQY6B8a4UW/wgEtm/JPIzYaESYcxHAbahecUcja8f5YZf4+HNPV0doWexpoE3t/KjN/rpzBZxJieGAZ6Msa0QtqD9zsy40sqqQnZgyupluzBPIA+LYOe0drZyICp/jwtVn0TZdBla9uq4GHlCoahUlNURPzGd1xX9awV2BwUDrf2eNnd0xYN4q6ugaFxP5IFU+f69ur/C+i6tqqAbh4JtJ31oJO7RVyBO7lbAvhupBsBgBfj7f2Pfbyd4gI8wNcV8+E35qhkdMvVBztkGMQaurG9Fnp5kermdnEjNoglsFjV3WK5lKDr2Kog195s62oSC2DkeqTKjzhmxmjPPjKz0cdiyapzT4g1+U8cr5pZp0x1eSv2a/hlq/rxmDhh6mz2ed6UBvYaWCqaflwAX/afo+sQ8nALZwMdBzM74a/rqDcJ62VHkwoPJrgoIF7dZ9S5sK3HxDSh4r2hfNioAF6PDwh/Ua2YWJCJ06N8sX6F0R8zHjPfWGrr8EdqqxGvdy9zjGQUbOV4TfELt2uhn06eUXZirQDwcLm4TmCp2d8S74/YVl3CplW2o8bRrXou1gPuR+rCfi5U8WgUWLWtV8/F+sBTsJ63cTX+B3RTRx0AH2PZ1d31vxR9vZ1YFbbk6ine1vriTycHz8R6UxzRPmclVTKKA3gW1gVdr5F/B/VKFVsVpLM4AAAAAElFTkSuQmCC'},
			'#6f180e':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEBElEQVR4AcWZA9AcSxDHP9v2F9u2bdu2rRfbTkpRMbZLsVmIC7HtpF//66bycPct5nZur+ofzOx0/6p3ugfr5e6vaWRgQdYA1kbWadYT1nsWib+fiPaN4rlCcp7cB01hTWXdbRkVRJ1iQ6hnfCj1SwijQYnhNDgpgoay8Df+j3b04zk8j3FifIonYJNZa5pHBn4DQP+EcMCZFsZhPNv5DnuwqwLWm9W3WWTg2y7sbHCigHVTsAN7bPcd2+8HP1YBh7O2teLX2i+LyA5LiaIJhXLSzMqlaVS2RNPwsAv78AN/7gLHsy53jAmhIS6cAXB29Qq0plsHWtujE00skls66rAPP/AHv7LAIayreH1OkU2OpBmVShFA1/fuytDtaVz+TEumDPsD+LUWUUGhMnN4RycXwCMy4mhpy8YEWGhVpzY0Jncq+iwT/MI/OMxA92sTHew0JUakx9Lyts3/AK9o34JGZU+SB9SYKm2igwgchoA5kxORzQNcVIiFjWr9AV7WugmijnYlgn9UKwaPMxLlBZ2dpwWS7A/w4mb1aXhaDNqVChzMM18TmCc/ku/NQOco8zxuBGBa0KAmSpxLJxgnVj1EicRqiXYpaIwDDytYK8rN2kUHOw3GvAXw3FqVaGhypEsHfeLDsMJ9ZhtTWDlZAeLvKWhHvww4eMClBb2me1yo08C/ShWimVXKaEakeVTgJx5fIQu7FdAvE3HmAfRaLehzfROcIzIyM95IiZqskyt/8XMSq2UYgUvL8PNBEtEQO7ecOtA58JxZ2+ABl5bhb0Mk5h2SDnNYBzoAz0nUbNj+rmX4Mx5SFOnseE4S+qOW4UdIFslld5IO9BQ8J1n2HmgZPt4nIUzKcLNIJdUDpRTQB7SgZ3SRiIbKOt1F5y0CumwriXknsSKazZfCenuPm6JW2y4xNc4b2TB1biuWcrvV2rE9bW4E2pd1AUd+O4F7OaJ81uhBAODFOHm+ij21xzU4MYJ4x/mbOSqZPXL1QVLCgKeh28cEI8qLZA+3i2HAk8BiV3eKFSAFzZFGrT3ZjQ15sFo8Y6W6e/eRznquugwOcOzJv7GvalbdMtXlxPiFbaKaxPtzw9TZ6vu8v1C/hyi4LmC7AJ6j6hJyB07ICi5mtsC+qqveCNZNqxYeJLhYQIJV31HnasbHepzdLFjx7khcNkqD1+PE/Cm7YqISidujfJ7+hNEfGW+2ovRP+FPaatj17WWOmYqCfXVLfkM8roV6Ou2KssXIUo9aLLaa/b3s/olj1XGULs2rW4larBo8FKXL1fkSwGLXtl6iFisHj2Fd7/q/zVUHB/Bulq96CvmPore7CXBxv3yaFWI/nTZ4GutuO0eEr7MibcCQAs9gHVX1GflvR035eJJQ7bEAAAAASUVORK5CYII='},
			'#6f706b':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEO0lEQVR4Ac2ZA5AkWRCGz7ZtO3S2g6e2ba1t27ZtK7Q2A+vA2j5fXv7Rdeyewuuq6u2If2a6kPnNq8x8L19dUennhx9+eJmVYo1irWIdZp1jkfT7sHR8lHTdK0KOdAB9iNWStcdut5HP56VINETJZJQy2STl8inKF9L4je84jvO4jnA97pPuf8gM2AdZA6xWy89+v5dSqRjgNAv34X628wvswa4RsFey4hbLD2cCAR9lc0k4r1iwA3ts9yzbT8CPXsC3sqba7XZK1jCyhVoZatGyKXXt1pnqN6itGR52YR9+4K9S4HtZm3w+D+KzxBkAe/bsThMnTqRJkyZRy1bNhEcd9uEH/uBXFPgm1pZA0Fd2ZLt07USTJ0+mqVOnMvQEatqskS4hw/4AvtVms94sEsPTOVlKjNatV6Dhw4cRYKFx48ZRo8b1cU43wS/8g0MLdMLpdPAj+6+xOnXzNGrUqL+BR48ZzSFSR1dgCH7hHxyqgC0Wy/3I5nQ6XmJs4MABfwOPGDGc6tYt4LghSrF/VCsGv0fNKHcpExacZM3/Bh4ydDDVrpMTghEIk86ywBz8SL7TmWyixMCw4UMJwAMG9OdEzJZ1gvt87MhmsxE/MfzGdxwXgs5kEgQe1o1yo/yt2+0suRlxC+DevXvy90xZB/FEBKCX2EZz1tOs66TfzXEc50XAwQMuOegB4XCg5MZ27dtQt+5dajSc5hGxWq0X+f53a7D7Ls7jOq3QzAPogXLQaxPJaJkyV0vWsK8Ye80UcqUFrtM8WzIPuOQMHxNZVyB2EQoK0E/hOpH1CbjkDP8sTdeahKRDDCtAX4frBGo2bP8iZ/gSoA0a6SdFRpp5YPuCnOGDIuVJiummCtDNBWIaSQ7b++UML4snoiKGESIK1cMiUj1QSgE9Xw66TTDoVzZmYp1Gk4CnKAf9lt1hx8WCM1jZGRHHhW1KPeWrSmuPHQkpRKotKTTWqVkweV0u52UB7SguT79TA301a300GqoqcDQWAvAatY0AwN/gbP9JJNt16tKRD38wx/taW64YJwEbSJkO7fG4McrdRJvb7m6Py1TgUHFVt5J1nRC0w2FHrV0RCgXMrBZHWQ9XuvfxKOuYtGQ1tCfEdhv7+livXaavuBX7HZuJRiWeNIl49d7Pa4H6ncvrC4xVnKvYUnUQp1PawAl4jei4x8K+UVu9t7F2RHSaeJDg0gRyo9F71M/wYuh0MhnTY8bbLbzZKAD+NXfXv4nOmFiQ8T+O3aMXzH6FkSzOmEnR0vZptd69dEDmq+0ruZXDmuI3vu974+nkK8pYj8elqhbzDEt4QldU+yO1VctkmlY8CWzdCtRiY8FvRulCP1cOmBddAB4sUIsNB7+LtS0Y+m9j7PV6ADyLdbXxFOIvRXeFpE1Mf7GTXsW6yVQQAfBHWHvcbhdh5Fm3m08hBv4Ya4lRr5H/BGuRLWfAZyzrAAAAAElFTkSuQmCC'},
			'#96c130':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEq0lEQVR4Ac2ZA7QjSRSGn42xbdu2bdu259m2x7Zt27Zte2rvn+2dRTKVdL3ul805f1Dd9d/vVKpuoU2S+2o2zKQoaQhpDukg6RHpLYlJn4+k8jnSfcVMjPACaBaSG+l6+4lWbHBIWjZ5dnbmvSI/C91SlEXsKMFi9pTCJ36jHNc19+F+1EN9+KQEbGZSbKvR5l+GhqZjfmsKAk62UA/1yecr/OCrBqwpaWDzEaavR0RmYGHbiiF4sgUf+JHvG/IfhDhKATuSlnecbM18VxXQGTxub1m29nh3duSiJ5t7sK5sePjCH3EQL7nA6UknBwWlYZFSP/2nAHjycjD7/OQM+/r0Ilt/ordwq8MfcRAPcUWB7UinR0Zl1Nmyhy64s29PLzH2/IYGesXR9op0GYoH8DNtx1nYi/ThlUNC02mZztxfgz26uxGwGr17dIQtOtwM1xQT4iI+OORAD+rmas+id5X8l1nS/irs+f2dv4BfPdhLXaSeosAQ4nZ1sWPgMAi45SizjBjNAesLaZldvzn/F/CTe5up1aujXBUFrCvEkK0IPJ1e6ObDTQKHhml3i/Un+vwCvnt7JUvcVwnlqmpYWHq0dgAXuO04SzuCfhW8qYiWwcO76zXA127MoYFYTmcQ1EN/bD/BirUYYYpP/Ea5EDTqNR9u+orAbXl9uVUvT0cdqa0eAV9nZ69Gstg9pXUGcF+Sl7UaZfaRPFxIeUlW0qcLynFdBBw84OJBx45PyqpVcceZUezoRe/fGgdtLMJajzb/QPWr/Ma3Cq4Hb5Tf4sQD6Dge9BFa3GhVnHWgJj9FhaSF8XQ9GclVSqGyBB5w8Yyfhm2Vv65oN8ESxnn1QOdBH5frDR5w8Yy/REm5WY4w6NCH9UBb4T6BnA3vrzzjj1E7S6jV0rnR0gJrEni/5xk/CNlUlGvC6dPT9EC7iPRpGrzwvsUz3uGxVH5qQvagmZSbPVoJZQ+k0jyA3siD9hwVLa3qBMz5eTqPkC82CfgXedAVO022wc2iMxi6Cvo4Bic+8Rvlwp4dJlkDuri+Fd55z2X5UMHocl+cB8BHDVmWdu/uZv+/gO4yzRbQrQ2BNicdmzo3h1GBp83LCeDDhm4EAF6KRvvnoA2FjQIcvq04azfe8idxVJO75RqAQRCxvXiKQ/f1dUYrB4tubkP6eDulKPD4xKwAPkCyEoLuNMUGuXb/2PjMKQGMXI9F/xOKmTW5Zx/Zyeip13J10yD2hDhuo3i1lDplakhbsR84TFQDGMdj0iTSXenzPNce7g5YKioKjKVwTw8HAPuqdQi5clh4ejUOZubDX62jXifS+SlzlJl4MMClCcRW7TPqfLQYeuW9Mr8SM941gcNGYfBGbcZafBedMbEga/Hn6VGhlH6EMRgjXu5G2H/tr9RWx1jPXnwx8g3dDIdsLoo1xXeq10Z9On5Gmd/Xx5lF7y6pNxd3nmrD8A+ZGPslbat28DatkbTD7+ZiJ56LVQK3Jx3Gfk7X5EGLLgAniOdi9cDTkM6Ojs30L+gBAakBvIZkrj6F+EPRq+MSsmiAh0ekB/BBkp3x6fjg2UjXe3tpusRZkrMRMITAc5C2qfUY+Q9p++Cl0qU0yAAAAABJRU5ErkJggg=='},
			'#266d28':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAESUlEQVR4Ac2ZA9AsORSFn23bL3m2bdu2bdu2bdssrc3CurC2vXv3nK48zrye6fzdMztV5x/8yblfpW5u0IkS+tINkpSGRkEHoWehz6AfITHvn5nfD5p2ZWzi+AGaB1oAva+bpRTdKbOoPrlFDS4oamQxUaOVqLEl+M7v/J3/d9qxPfuZ/nliAZsb2q4bJftDd84iakhhwnkX+rE/fP6kH32DgE0MDdcNk36vu2YVNao4gydc8KEffH+A/wjG8Qs4PXRGN0+FESoUNnjJcaWkxcImMnRTX6kytYp3ePjSn3EYL6HA2aFXdcdM9/L0ERFwzLZBcuDKOjl0bYO0XtTcftThzziMx7i2wGmg13XXbCEBSowrKYM29JIj1zfKiZtbZf+VtdJobn1fUgbxCP6GbpI8rU0On8NkCTGtMLmirDoxh7COdl1cKbVn1uL/fBPjMr6nHHcmRas0osboR8zKTSwnG88svA+85ewSqTqtqq/AFOPqlmmEHNEBN0qWk7NZDSsSYjbvwMT7wGtPzpPykyrw92CE+KxWAM8WzSivDpcWrRc3vw+85Mh0KTOhrBWMRZqscgdukoKT7zs1oliIwcrjsxzg2fvHS8nxpcMHQj9n1WuagqPEd+e78fOuEUXhk+Q7MKV2G+UOuk26kM7M2+M3t8jEncNEjy0ZPsCA/FzhfoXHPKgolMK8z+Pv+L8VOHnI5Qa9XfXMGdKx28oOMnxzvyebD8eINE72C/rXeoJvLf4f7TxDg4fQO9ygX1CDCoZ0rDi5oqsxUoDGcyPMlflo5x0amy1yuRl/qUZ631cwd5kKEaCLoJ1nb/KQy834D1ObPYmTjjkcAToF2tnUbHr/6Wb8KxoFNdKFrUZ6tKL3z27Gn9iUJ5PTcyJAz7PK6eFF6f2Rm/FdNbCAnXGjYKoHSiWhr7lBL9bdsnk3DrBOm13fHDfo6tiMs7H1ChZ+RSxq7WnOlGUj7T3eNikSd5nUeDGaDVNf3Trt/wJat0xN6I7RQCeFXlJ98sQXum8eAj8f7UGA4BUweX63mO3+ndKbpvgXHHW8HrmGYRLAQMU+Ldpl4CivtT3crtNt08cU2OzqnoFS2EE3T8Va+7TqkSN21aJhki8QM29C7z7yw+hLs2UN9kzYONkfiNfAr1um5jiK/YPLxMAmnllE+vp9nzffqd9jtO/XBeZItTyoS8hzukvWIE7cR+gf1FVvBuht3xYeTHCzgKQO+o66GDZD3+Hs5seK9571ZaMFeAtcEP5tvWJiQ2Zuj0rE+hHGSM54zwfhoYXvlbZG8Xr2shwzP/qKMqIY9xR/o1+n4OncK8oR7BUAHkUtbuFsNUcmivfLHKvuuh5aR2vB1bF9LQ4IPK1TurpmDb94tE1P4F32tTg48CzQm6p79kegdYdMBL4IJbV3D/6h6Lv3LjG5epqntWniT+cOng9636TEm1BGK6M4gBeAbgf1GPk/msWXdhREhJEAAAAASUVORK5CYII='},
			'#ebde37':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEv0lEQVR4AcWZA7AjWRSGk8Gzx7Ztz9re8ti2bdu2bdvms22OPXP2/OvdTm7SN+l0qv7qav3ne/edey7aYOuvVydDNVYv1kbWNVYK6wmLcMQ5ruP+n89VN+jwA2hR1gRW5KhBzrR2cUE6ua8s3b1YlaL961JiaH3KiG6EI+Ec13Efz+F5vIf34eMI2CKs5QN75n69YVkh8r9WHXCqhffwPvu8gR98tYA1srr37WJ8tHV1EYoLqofgNgs+8GPfx+zfA3HsBezJ2jN2iAs9uGKuZZvSo/jO9DxpOmXFfqMaHr7wRxzEsxW4AOve6oUFKCmsgSIYAF8kL6APGf6sYHoc30261eGPOIiHuLLAbr07GR5sX1PUZMs+S5pCHzJDiDKjGPgh5cS1tkvKcDyAPxzWN6+7TA7vW7+0kLJ1Yz6nN2nHAQvR+/RblB37K+7ZTYiL+OBQA91j2lgPSo1s+B+zzJhP6G36hb+B36Vf5hT5zq7AEOJOHeNO4LAKeED3XIXQm0Nu11SYvUrZ9jfw27RT/Ed8huuaKPhWTUK1YvD8FqF7dzbM3rhcmRaP47v/DfwmdT8Df4Trmmrj8sJo7VlC4OH98roxdE7k/ToKgzdpRwHMrb2Fz5uZDMLvcT4WpJEDnahvVyOOOMd1KeiI+7WpT2djDoO7inL557lTvE2Utu8YOJLL2zI+b2wywPXTlWlgj9wv2GMcqxzLCUec4zruy4CDB1wi6OWHdpRSvPgkYQgPHDPNGoffq02DeuV+zu83NePbFPcj+Dm10MwD6BUi6JuY3CjL3BdC43VLCsJ4rIWKNB6pohYaPOASGafHBtZVbTxygBOMy1mALoscV+sNHnCJjF+nRjRUbYxOhxy2AO2E5yRqNrzfiIxfpIQ30Kqly0i0NOYk8H4mMk6KfCAoT+KcHmMBepxMTnPnhXeMyPjsjTPqS1P43drEI6m4evSUqR4opZUAfUwEPXnHumJ4WMpcXKcrSfluW11E+F8EdKNxQ13xsPQIhlRBjqPT4YhzXJfxS2eNGewC6BqWZniBt85VwUu669qpSgC+Zc20tO2M8Z6UrjMw4k8e5Q7oX6yBzs26ffpAOV2hzx4qB+Ab1i4EAF6bl/evwu7U0gU4Prgejejv9IE5mqtdcnUbwyvkhJD6Dk+LRTN90cpzZRe38xZM93Fofh/cXhLAV1lOUtDjh7mi1l7Zt6WEY6rF6UqY9KdxzGK27n2UYKP0OxeqwljTNSGPmq853sf22mX6ipdi72P862oCjO0x9B+UW3vv542fNdFLsa1gqzAVnj3JC8DTtdqE3LdpRWEtNma2wF+rrV4vVuCp/WXtAowO/ucA4qr1HnV5ngzl3LtU1eYRj/cKI6Q3GyXAvx7aJ+872RETEzL+w7F7VNnRnzB6osfHBarbYA+8UeOv0vapXt9epqPnW7sYjuKl3IgBTu/4vV+1pxNXlC2LZvhSWlRDi7V44gg3wn/IoPfvz2XVWSxazc1RknlFja1jRS3WGdyddQMffUwNHjzpAvAqZS3WH9yP5b97Q/H/TDNXzMsP4IOs3PoSij+Khh/YVhLQtHllYQBfY7npTycGL86DRuS8qT4A9md5S9joAl6SdVqrz8i/AXMlrH58m5LmAAAAAElFTkSuQmCC'},
			'#13807f':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEUklEQVR4Ac2ZA5AcTxTG/7Zt2zbipHi2bdtGbNu2bRuFuBDbTl7el+twbmd3eqd3s1Xf3e3M9Pd+1ff6NeYBez8Perh/zYpnDWQtY+1nnWKR+L1fXB8onvtGJo4ZoG+xSlk7HvbzpSeiIumZlGR6PjuLXiwsoJeKi+jl0hL8xndcx308R3ge7dAePo6AfZPV/SEvz4tPREfRCznZgDMstEN79rkEP/iqgH2QFfOgp8eJJ2Nj6KWiQgS3W/CBH/ueZP9YxDEL+FnWmEf8/eh5Cz37Wlkp/dGxHfn070Uf11QZhocv/BEH8ewFfpW17onICOSnJhgAQwb3pe5zp1CveVPp707tpXsd/oiDeIgrC/wUawP/+zQBXuWe9erXk/rMn0YDF06nbnMm00/tWpuSMhwP4Bsf9vF+WiaHx/Fg0Zi+V1VBpZNGARaijrMm0leta3HPNCEu4hvKcQyKR4MC6eWS4rvM3q4sp9qpY28Bt5o+nj6prTYVGELcRwMDCBw2AXMZeh2j+YW8XI1Z+piht4ArJo+hd7nXcV2FEB/VisFfsaWXWz9ZT1r807n9LeD88SPozYpyXFcqcDBPK11gTn4MvuMvFuRrDIon1uVx6qgh9Hp5ab1B0O7GrOfrg17Cb3zHdRlotIPPcWZ6Uq+XXR8LCdY0Rt4OWDCdIof2p1csBHguIx0z3Dn2KGZ9zHpM/C7GddyXAQcPuPSguz+dmKBp2LxHF/Ib0Ntyj+Tn0UPeXme5/V8WfP/CfTxnFJp5AN1DD3rl81mZmobvV1fqGSMFYFxkZayU4Dmj0FhsgUvP+NBLhQWGjZG7SAUr0B/hOaPe4AGXnvFFUZsNCYMOOWwF+jE8J1Gz4X1Jz/jcS4BW09MfSvV0cRG8z+gZ75UpTyKnC61AF0vkNAY5vHfrGc99LjNDxhjlTkX1QCkF9DQ96Iqn4mING6us02LVV6gH/TsW4xLmSmZESOwpv7W29tgiUsTpEqmxypYFU9CjwUH3BfQjdctTN1ugH2atxpbfmcDPpqYAeIWtGwGA/8CD58ILEqPdpF06xsM15vjH6JYr+hE/Xxg4HPrxsFD0clvZzW27x0JDHAosVnVLWY9JQXP5Q61d8nRCvKOqBUrlQY75tr1nH++y0SGxZFW5J8Sa/CLHa2DWKVNz3opdxWGiqoGH8YNya/Z5XgnqN5aKZh8XiC1VjapDyHFPxkSrOJgZAn9VR73PYZo3a+LBABcTyJOqz6g/wbYeezcTZrzt0oeNEuAtHvLxviI7Y2JBJk6PvnD0K4w4jHijG+EXcnNulrZGznr3UoORjwpg43oba4or3M5dPZ1+RRmCtQLArdbiAH/kcdwDzv6IbdVc7FD0dtQ4OpaoxUrBn0bpwn6u3skjNATAvSRqsXLwl1ibnoqPu3uZGREO4Imsh+Xd1b8U3XbzEBOzp3hb+5Tz6fTB32HtECmxifW8hI1TwN9jzVb1Gvk6GpETIb0ZBsIAAAAASUVORK5CYII='},
			'#b3b5ae':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEKElEQVR4Ac2ZA5DsWBSG17Ztu7S2i2tbo+JabY9t27btN555tm1j7p5/tMqkk9ud7jdV3yjJf75K35zc3Jzi6Nf7779/P+FDpBJdxCZiL8FmfuLvrpnt2O8Bh4tyil5H6IjlHh7fMbX6TxYaFsSSUuJYXkEWKyrJY+WVRVM/8Tf+j+3YD/vjOByPHFfIXktEE0fMFgPLykmDnGxwHB0P+aPIQ64SsqcSnsRus8XISssLUNxhkEN5kN9DeKGOs4QvJApUqj9YWnqSYPGKqmLW0VrDRvtbWV1dmWz5tIwkplL/wVAH9RwVvpIY1Bu0gsUgODHYznatHmO714yzzrZah8486qAe6vIKn0cMm8x6wTM70t8yJbpv3QTbSdKtzVVOGTJUD+IjxPk8Y7hIp9f8L7SmtpStX7JgShZsXznCGhsrsM1poC7qw0OOtBfG2H/DqmtK2KZlg3PCW5YP0RApxzang/rwkCp8NbEHF8d/g1aO984Jb1gywGpqShURBqiPbkVcIUXaHz30vyG4yGaF1yzsZ1XVJRwyXOPbT8rFt6uwOOd/AesXT4/jFWM9uBAFi+Duh0LffPM1+/DDD/ETf+P/XNLwgA9xrpj0mz/+9INAaytne0l48XAnq5inQGh4EAocJDTE7cRZMz/x90Fs5xGHD7zEpKMDg/z+d2B/VyMbW9A2b3BeQSaCDxBPzpP7JLbnc5zxwGA/ZMeISfcmp8YLtjkJY09tZ+hpTWaDbGn4wEsseGt+YbbsYIxdDAU70rd9TfvJzYYPvMSCj/BMhnDRYQzbkT4L+/FMqjAbFAs+WFKWr9SZvvXrr7+SnV1cmofs/WLBG/LyM2UHG016BKvsSGsw9uVmZ+emI3uVWHBjfEK07OC8fGndg6dfx8RFIrtKTNposRrFgxTp0/yfIqQf8/Hx5ghX5o4IPDw9IP2gvVv5OB5EcYC7iYuPgnCflAnTZ7/9/stJIf3T9C38LSnSpxP9QcH+bhUOCw+GcI/UBwGIP0IcTk1PdIsw3SsgPEk8LfeRy+NP1e8IcLm0RquCdCDvw20QAlwpbLGaINxJnMUrfRbRYbWZXCIcERkC4S3E9Y6ufdxIbI2KCVdUGG0WEzbieWetMr1GnBCfxPNTVJzL0GbRbp29nqfFqqcS0pQLYatSi5BFwktk/Oh0aghnIF+ppd6LiHFff6szlwh6iHOVXqO+g9gV7eCF6R9gg/Ay7sVGDvHXiePpGUl8rS0qdHb16B5Xv8LwxnobrnxZM7eE6NnW9qK73r1Y5XQUfDL4hIi3lbcT7ygZuNVL6cUzK6Heishw3OobsabM34vdI34+0WM06YSFNVPCcRy9WHHxy4hRPBgLrOqXEqcrb8H/UnTp7KzQYNRCuIs4z/124uI3EMtxxnHmiYvdIsIhfhNRr9Rr5L8AZ94yhqRWJRsAAAAASUVORK5CYII='},
			'#d523c8':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEqUlEQVR4Ac2ZA5TlSBSG2xzbtm37YGzbtm3btm27bWNs27pz//Vueiov1cnLvnP+RuG/X6erbiE28f20s2men9WLtZHlwXrIesMifMfvf5SjHu0K2JjwAWg61gTWtb4OXWluoim0PeUaOpl+H3lnOUuBWS9ReHYvwnf8jnLUox3aox/6w8casGlZy7vatf08P/E0OpfhEOA0C/3Qn32+wA++RsDasrp3sG35ammS2eSX5QKCx1vwgR/7vmb/HoijF3BC1p4Bjj3oTIaDcQaPyO1Ft1oE0OMpIRRT1kczPHzhjziIF1/glKyA2QknUVDWy4pgAHw2P5S+3bxG3+9eo9ttAqSfOvwRB/EQVxbYjRW0LMkc5ZPN5UWPJ4bQj/vXiJ5dp283rtGNev66DBmOB/DgnvYd3WXG8L75iaYpTKOK+9D7c1GAhehLeCxdq+GLOt2EuIgPDi3QPUa4DKDQbB7/Moss7E2fvKP/Av7kF0Mx5cVjWEaIO9y5H4HDIuDOdm1SYzZfynRMYfZ6V8RfwB8uRlNUMXVgWV3KeIyQrRg8hSp0e5sWsxcknq4wud024C/gt0cjKbKAN8oN1ULmYOhZQuBe9p3cGPqlZ+bTCoP3Z34fx6+3R1BEnriDoN/8RFOpj0MX6mjbCt/xO8oloOF3isDD4K6isdxgnOswRWeMW3p6nZ4vC6PwnHEHOJJ2J3Wxa/uBPcaxsrOc8B2/oxz1MuDgAZcIevnGFMsUHe/1DaIn00J+aeyR6SQvye3ec/9yv/Ath3oPfnJaoZkH0CtE0N4n0+9VdIwuIZ5w8xJNhfFYlYw0HkNFKzQ2W+ASGT/xzXJeszHGLoaCCnQ2tNPqDR5wiYw/h2S7qtkYkw5jWAXaCe0kcja8v4iMPwRnu2LUk86KdhJ7Eni/ExnfF6cn4ZgeowI9TmZM8+SF902R8dmj6bSnpqucPXglNSR7HE67A9DHRNCTlyedh8ZS5qI8jXoZXxwS8F8UQZce6NgTjaVXsHn/XhHxO8qlPfs5dgd0QbUdXtixdLvRwXQdSrsdwD6WbEvbjnIZ9L+AHurcF9ANLYG2Z/nuTLXOVODdqTcA2MvSgwDAi/Dx/tOVTCdMAfbPeoF6O3T+wRwVtB65uvXnSRCQ9aLVoSe7j8JTnit7uJ030W2kVYE3JF8K4KssJynoQU69kGuvrE2+2BrAyPXY9D/mmOnje/eRkY2enEi311DgixmPYk/+meNV0euWqTYfxb77ZDlrCDCuxzB/kG71vs8bP9p1MLaKugJjKzzWdQiApxt1CblvUeIZRlzMbIG/UVe9iVhhO1Kt1QUYE/yPBcTV6DvqHLwZenkq/T49VrxY6ctGCfA6Pew7fJNdMbEh4z8ct0d5rP0KoydmvJ/Gg/CFjEf+TG3VzHr3Mh0z39LDsFfmM9hTfON+jYynE2eULdgrhGX3VM3Fg516E/5DNmZ//jhWnRUdWoP4hD/Cpb8yF5sM7s7ywnkursWDN10AXqXMxeaDJ2OFrEq24F/QMxKMB/BBlr25hOKXojHreXsJ4MVJZgLYg+VmPp0YPAPr2gS34QAOYSU2AUMKPBPrtFGvkX8C3MitQhjiN24AAAAASUVORK5CYII='},
			'#ed3f2b':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAElElEQVR4Ac2ZU5gsSRCFx0T72rZt23xZE0/Ll7VtXdu2bZsYG9cexsbpW8uaye7Krura/r7TKJz4v+zMyMisAF9f3wTFNGa9wprF2s/KYt1mkfKZpRyfpVzXRD6ab6CVWB+y4idEWWl1pQp0oH51Ot+yDqV1bEDZXRrSte6N8en+jeM4j+twPe5T7q/kD9iKrAk/hsblr61ckS63rgs4zcJ9uJ99CuAHXyNgA1kvfhcce3NjtUqU2cndkj4LPvBj31vs/xLi6AUcy1o6OdpGl1qV0bK9mtGt50fR3c/eoBvDO2uGhy/8EQfxfAV2sY6vrFiBcro0UgUD4L3v3qHCAxuo8PBmuvXSWOlWhz/iIB7iygJHsU5uql5ZHaRnU7r7yWtUdGQLFZ3cSYX719PNJwbr0mU4HsBP/RphiZbpw8vXVK6oMr0+uD3lr5gOWLcKdq6kG+N745xuQlzEB4cW6JdmWRyU163Rv4EHtKH89fP/Bt60iG6M6KIrMIS4Myx2AodXwD+ExpbHaE5sW09l9mDWj38B56+eRdcHtcNxQ5TA8ZGtGNzpEfrboJhv1lVRd4tbL437C/jhwgl0vV8rHDdU4GDor4XAv0VYohj6RkqH+iqD/OXT3MAPpn+HFFdqENyH/jgh0opWwid+47gUNO77NjjmBoNHivryiPkOp+pm9FsA3//5I7rWo0mpAU43q4UZ7j57vM+qzQpTPt/HcZyXAQcPuETQE3bXqaq68c5bz9DdL94q0zi5fX36KSzuHt/fqQzfTjif0l57izMPoCeKoA+huFGnuQ7epKj3PGSkD3CdVmjwgEtknJvRqYFm49+576IreICuhT6u1Rs84BIZ5yu5WZMw6NCHPUCH4TqJnA3vApHx/dyujYxq6ZoSLY2aBN53RcYZqR3qy06773qAfl+mT/PghXeSyHjb6Wa1NRsje/BMakj2ONWsFqDXi6A/2axUdTLmojyN8xK+WCQI/0VAt58cY9NorJ4Rf1dmxN99nBGhiY/WlE09VXhnzzZXuojJOtW0FoAPe1OWPj7b6vhfQE+PswN6pDfQwawjhxrWMBX4MMdnjoPeLgQA3oIHz8OkdvVNAc7s3JC44ixhji5al1wvTIq2UhYb+Bt6sascWvk72cXt9wudLr8C73pU1e1jhUlBT4mxIdfu3VGrij+AketR9OdwzMq+7n1UZaPccy0MTYNYE6Imz+d4PfTaZerPA6M4vWMDQ4CxPYbxg3Sr937eB3NsTpSKum8XzLU7AfyFUZuQy9dXrWjExsxc+Bu11RvHOnuwQXVdgDHAlQkk0ug96jpcDN24gLWk7zPeFYnNRmnwAb+EW4pkZ0wUZMruUQN/P8J4GSM+Q+MGe3ybv1JbL7OevXwx1+59Rknt0IBrbEsR3zfKeDpxRpm7iGuFq9085+KpsTbCPxRg9ktZVm0TLVpzeIU/0+JQ5WKzwaNZB7GeK23y4KILwJPVudh8cDvr9Naa/y6ullcoD+BVrGBzCcUPRS/vrF3VDby+aiUA72dFmU8nBq/Cil/gcAH4NMtiCogEeDXWFqMeI/8Bq6ENsSflOX8AAAAASUVORK5CYII='},
			'#f28837':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAEn0lEQVR4Ac2ZA3B0PxTF+9m2bdu2bdu2+9m2bdu2bdtG3fu/Z7qYzttm92Vfdv87c9pu8nLub9LkBs/D2c+EIqGysDqzVrLOsd6zfrHI9Pu9qXyl6bmsMnGMAE3M8mQ9mVsuIu1qFJ8udk5ND/tnoQ+euenrmLz0a0IB/MZ3Qjnq8RyeRztT+8SugE3Emj+tRFifPU0S0LNB2QCnW2iH9uzjCz/4qoANxeowqVjoHwebJ6ZPo/IguNOCD/zY9yf7d0Qco4CjsbYsKB+JngzMahtgUmH6u6I5ee8ZQb9nVdAND1/4Iw7iOQscj3VtR8N49HVsPk0wAHofnEABT05TwLNz9HdlK+lehz/iIB7iygJHZt041CKxzZ712jWMAp5foMBXVxn6FP1d0tCQIcPxAH5zVunwUWTG8DZMFk3vTi9Dftc2E2Ah/wdH6M/8mqgzTIiL+ODQA91xedVo9GNc/uDAU0uS/61dVuA7e+n37EqGAkOIu6xKVAKHQ8BTi4dJgNn8cmgOjZnvmcUWYL/rW7nXS6NciV4OzU7IVgwe1y70xKKhJu9tmlBj8ndVayvwxTX0e0pxlCsVOBh6khB4VpnwkRn6+7sRuTQGflc3EoB9Ty/ERLQZBO12N05Ac8pGQC/hN76jXAr67YicNLFo6O8MHkk0lmuurRlT05jHLQNfIZ8jU+nXxII2A9zpk5Gmlgj7jz2Gs9Kwwpt+D0c56mXAwQMuEfT80+1TaBr+29idvPeODNH4zfCcNL1k2L/cvnAIvoVR/5af0wvNPIBeIIK++LB/Zm1PzygrMsYQgPEwOxlpBJ7TC43NFrhExp8+SuwrMHYxFOxAp8Zzer3BAy6RsY8pN+sSJh3GsB3o8HhOImfD21dk/O/7uHyqejoVnpPYk8D7j8j4rUx6Mo3poXagh8uMaZ688H4uMj56VyI1IXvwSirMHtMks8ed3hkBvU8EPfpwyyR4WMJcnKdRL+N7MGjXN1QEXWBhhUh4WHYFs7Uiolzac375iIDOZm+Hd+d+30xo4Hbd7p0BwJcc2ZY2W1kt+v8CeknlKICu5Qh0GNbly13TuBX4Sre0AL7g6EEA4Dn5eO/9elgOtwB/Hp2HZpeJEMgcRfUeudrP5xPyl9F5XQ69sU5s9PJU2cPttA21Y6mBE+/qzrLCS0EvrBgZufbMibbJXQGMXI9N/0eOmcTZu49kbPTpQb/MSoFfDslOvGr6cLySRt0yVeCjWMCHkbmVAON6DPMH6dbo+7wRq6pHx1bR8OuC1TViAHi8qkvIbfuaJVJxMbMG/qqueqOz7lzqYszCgwluWkAiqb6jTsuboe+P+mcxYsV7LH3ZKAFecWapcP6yKyY2ZKbbo4yufoXRCTNe7wX788HZzKmttLvevYzHzHc0o7zzzEVzykTw53a11dOJM8oa7BV+js9vNxcvrhSF8B/ycPfHdKw6Kjq0fuMTNa6OJXKxUvAorAt46WNr8eBNF4AXSeRi5eCxWbeOtk4aDHpb/bgA3skKo55C/qXoo1PtgnaF+3n1NL2tjex+OjF4UtaTdbViAvgWK4ZbQCTAk7MOq3qN/B94U4JoTEJA1wAAAABJRU5ErkJggg=='},
			'#ffffff':{'logo':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAHqUlEQVR4AcSVA2ylaRiF23AZrTdmbUYN22g8UYOxFY5t1MEY93awu7Vt2+7Fuu61ceZ7v9puT/Jbz6vz26xVubm5Tjk5OacyMzOFaWlpFcnJyX3x8fHKmJgYfPz4USkQCPpevXpV8ezZM2FUVNSpkJAQZ5utUFFR0a9suVVYWCgqKytDW1sb/v77b4yMjECn08FkMoFkNBqh0WjQ19eH9vZ2sADx/Plz3Lt3T3Tt2rVbFy5c+HXDYUtKSn5hyzMGauju7oZSqcRq9P///4NVBFeuXDGeOXPm2dGjR39Zd1iWUVsGe7y0tFQuEol4BtdDarUarJVw5MgRRXBw8Im9e/fargtwfn7+t6wV4qqrq6FQKLCgzEbAoAGsFqxUEokE586dw/bt2+OCgoK+XeuQ/VBQUNDQ0dEBs9mMOSJAgxpQD48tZgNWK5qF0NBQBAQENPj7+/+wKuCMjIyvmCs09fT0YF4ZtQx0iC8c2GLCeoi5DLy9vZsDAwO/XhFwYmKiLbOvBHKFebOrlU0Ba0ZgNZt4JajXDQYD9Hr95ELn6JrFYoHVasVydP/+fXh6eiawZfk9npCQcKK4uJh/aIboo9rRGcAmI4fkTkKWR/b277//8oX2h4eH6RrdQ1a4JDhdV6lUYIMJDw+PE8sC/uOPP36KiYlRzDt0OsUksFUzyoC5D3NY8unOzk40NjaitrYWdXV1aGlpQW9vL7c4uVxOfbskOF3TarVoamqCl5eX3M3N7fsloYVCYQg5xRyZDVPAWjkruYlezjMpFotRX18PZo1IT09Hamoq37Ih5gGQp1PWKePUPlTBhUTXKBH03uvXr8PV1fXJosACgeCrly9fyqg8c8RAObReybJh4R+XyWSQSqUcjA0uoqOjsX//fvj4+MDe3p625MFgA033Tf4xlwM9NDRE7yVomYuLy5cLQkdEROxi/Tz/8HFg1YwXU9mbm5s5VEhICD5XZwYhcV1RGL4hMNAUWuiySQOJVatacGVQC0oELG6sbhR1BBHE7EQ3CslECBgUKu5SijsHFYRCBYpS3VWdWBCIASQJVBFBBzAB4pC0SW//78GFB/HNe9WZag9cBIH7vnffOf/5z53y8vJMYWFhQqtAK8bfoqKihAoqMz8/DwjQpEAodDqd9l60vb3dlpWVfRcIPTo6+oi3+yD+euM1DhfkJTnPpqlUyiqlOJFjQVabE0IPrVYcb29vu24amtOHh4de2o2NjdnS0tIfAqFlYh7v7u6eeNKEH/ro6Mii4Rimrq4uK+B7JktICe7LKFkiCvTBwYG3/9zcnC0pKXlsgmJwcDBNPocFp0V+ogzr6+u2srIS6IJs0Drpmx0dHZGhST3USDaC+kiboOjr63vLKYYEJ+2KEGki52xxcXEsG7ScXEz7R4Imp9H5ra0tK6PG3n+aoIjH4xlOMQo08oWM4frkFwDPetLKzRuTk5M2LChE9t7Z2bGbm5t2aWnJqphfm6Bobm7ep8KjbIwK0DAomKGhIasmcDdEThNyi5G/IvlMkc/MzJB6f5igkC1coUlE+YRsTmvmU/KAmpqaYyTCnBCLi4vVCwsLx2H1wr7syUGQGrykpBToX7IVywPGISIKuN8E0UU7Ozsz8sUJWcyC2dnZmD5tgbpkQsWUQQ3CAmPFi6FgGxsbVnOn7e3tBTr4K6rX32ppafnAH0R1Z6QWzWlqaorPStPhxPgakQ6BLkv7xr9jCfR1rLw10F+bbKHu9RSHR86G2MqchUs3/ynLGtvx8XGAN0xI0ATiCpoHmzhLmTdw9nSF7XKZqZ1TrqurA7o5FLqiouKylOD36elpPhXt2m8pcw4OMGnBISGfGp49lzgyMgJwSivaICDoCuXSG3wIxgVwTpxUySU0e5GC7O/SAmB5erz03wL+xvybkAHqbWhowAsD7vfCPCyneby/v09nRS28tFC/4JS/N6cJ+diJnp4eu7e3R6pwT8HJnBncAaMqSCGz6PLysnfK8j8Ar2JtTwXd2NgYE/hvCDwGhrzDzJy2MB0wacY+SCR2lSYiYNSCln0o4KvmLCHoL5TjacYnvEb4rBeuFNSHc4lYW4DRdj3rrYDrTA4C8Iba2tr3TCnI0mkL0wHjLbhVwlsAjGeuqqoiLeImhwH4/ba2Nh7mL8zI4K7jOaVAmWggumOxSkOAHxoix9CXtH4aHh6mMMlHKj+Kojhp40XxyVhOlIJTZhAGOOn0OB/gn2g91SU5D4+kKH5p8w/CAPf397sG8pHJYwD+pVr9SwoTcAoK6ToB3AHzYk7aGJ/8He+5FpeN+Q9dFXwrG/uOyg8C92sxxeucG8ATExPMfa8E/JX5DwPwO7rZ9K7B6GhoOICAUpz8dVpMV2XWA1iXQU7abptzCMAfclFIg/CDu4mGnPdrcTKZ5Br3nYBbDHFO0Je0kt3d3R4c4ICiw8gi/1tbW3NazABMHt8x5xyAx7RWBgYGmBWZolnencXq6irA3u8q9fX1AVp8fuAf6wohxVTO9S7DsfMTNI+mpiaAf3RafGFC0J/pzu0J4FzxAozNbG1tBfhnrcvmIoagP5eUPSNVBM01L8BrWlfMRQ5dYV0T5Av9vAbwE61Pzf8h5ImvC/ZXrbz8jPwP/8npEJvDQKkAAAAASUVORK5CYII='}
		},
		styleMap : {
			"default": {
				fontSize:'${fsize}',
				fontColor:'${fcolor}',
				fillColor: '${color}',
				fillOpacity:'0.5',
				strokeColor: '${strokeColor}',
				strokeWidth:'${size}',
				label:'${text}',
				graphicWidth: '${size}',
				graphicHeight: '${size}',
				graphicOpacity: 1,
				externalGraphic: '${logo}',
				labelYOffset:'${labelY}',
				pointRadius : '${pointRadius}'
			}
		}
	},
	buildMap : function(divId){
		var map = new OpenLayers.Map(divId,{controls:[]});
		this.map = map;
		var mapWms = new OpenLayers.Layer.WMS(
			'basicMap',
			'http://vmap0.tiles.osgeo.org/wms/vmap0',
			{layers:'basic'},{}
		);
		map.addControl(new OpenLayers.Control.Navigation({documentDrag: true}));
		map.addLayer(mapWms);
		map.setCenter(new OpenLayers.LonLat(120,20),5);
		this.initDrawLayer();//初始画图图层
		// this.drawPolygon();
	},
	getMap : function(){
		return this.map;
	},
	initDrawLayer : function(olMap){
		if(typeof(this.drawLayer) === 'undefined'){//反转图层时避免重复
			//建立多边形承载器
			var drawLayer = new OpenLayers.Layer.Vector("toolBarDraw", {
				styleMap: new OpenLayers.StyleMap(mapComp.option.styleMap)
			});
			olMap.addLayer(drawLayer);
			
			var dragControl = new OpenLayers.Control.DragFeature(drawLayer, {
			    onEnter: function() {
					if(!mapComp.clickFeatureControl.active){
						mapComp.clickFeatureControl.activate();
					}
					drawLayer.styleMap.styles.temporary.defaultStyle.label ='双击删除';
			    },
			    onLeave: function() {
			    	drawLayer.styleMap.styles.temporary.defaultStyle.label = '';
			    }
			});
			this.dragControl = dragControl;
			olMap.addControl(dragControl);
			dragControl.activate();
			
			var barClicklTime = null;
			//增加额外监听
			var clickFeatureControl = new (OpenLayers.Class(OpenLayers.Control, {
			    initialize: function(polygon, options) {
			        OpenLayers.Control.prototype.initialize.apply(this, [options]);
			        this.layer = polygon;
			        this.handler = new OpenLayers.Handler.Feature(
			            this, polygon, {
			                dblclick: this.dbClickFeature,
							click:this.clickFeature
			            }
			        );
			    },
			    dbClickFeature: function(feature) {
					if(barClicklTime){
						window.clearTimeout(barClicklTime);
					}
					var feaType = feature.attributes.type;
					if(feaType === 'dynamicLine' || feaType === 'dynamicLinePoint'){
						mapComp.removeDynamicLine(feature);
					}else{
						drawLayer.removeFeatures([feature]);
					}
					mapComp.removeTextWin(feature.id);
					dragControl.deactivate();
					mapComp.clickFeatureControl.activate();
					mapComp.drawLayer.styleMap.styles.temporary.defaultStyle.label = '';
			    },
				clickFeature:function(feature){
					if(barClicklTime){
						window.clearTimeout(barClicklTime);
					}
					barClicklTime = window.setTimeout(function(){
						var fType = feature.attributes.type;
						if(fType === 'Point' || fType === 'Polygon' || fType === 'RegularPolygon' || fType === 'arrowPolygon'){
							mapComp.addLayerText(feature);
						}
					},200);
				}
			}))(drawLayer);
			mapComp.clickFeatureControl = clickFeatureControl;
			olMap.addControl(clickFeatureControl);
			clickFeatureControl.activate();
			
			this.map = olMap;
			this.drawLayer = drawLayer;
			this.logoList = mapComp.option.logoList;
		}
	},
	drawPolygon : function(layerSize,layerColor){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			//工具默认样式
			var drawOptions =	{
				'freehand':true
			};
			var temporarystyle = OpenLayers.Util.applyDefaults({
				pointRadius: 6,
				label:'',
				fillColor:layerColor,
				strokeWidth: layerSize,
				labelYOffset:25,
				strokeColor: '#384163',
				graphicName: 'square'
			}, OpenLayers.Feature.Vector.style.temporary);
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
			this.initDraw(drawOptions,this.drawLayer,'Polygon','Polygon');
		}
	},
	drawPath : function(layerSize,layerColor,lineType){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			var handS = lineType === 'dynamicLine' ? false : true;
			//工具默认样式
			var drawOptions =	{
				'freehand':handS
			};
			var temporarystyle = OpenLayers.Util.applyDefaults({
				pointRadius: 6,
				label:'',
				fillColor:layerColor,
				strokeWidth: layerSize,
				labelYOffset:25,
				strokeColor: '#384163',
				graphicName: 'square'
			}, OpenLayers.Feature.Vector.style.temporary);
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
			this.initDraw(drawOptions,this.drawLayer,'LineString',lineType);
		}
	},
	drawPoint : function(layerSize,layerColor){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			//工具默认样式
			var size = layerSize*15;
			var drawOptions =	{
				'graphicWidth': size,
				'graphicHeight': size,
				'pointRadius': 6
			};
			var cLogo = mapComp.getPointLogo(layerColor);
			var temporarystyle = OpenLayers.Util.applyDefaults({
				pointRadius: 6,
				label:'',
				graphicWidth: size,
				graphicHeight: size,
				labelYOffset:25,
				graphicOpacity: 1,
				externalGraphic: cLogo
			}, OpenLayers.Feature.Vector.style.temporary);
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
			this.initDraw(drawOptions,this.drawLayer,'Point','Point');
		}
	},
	drawText : function(layerSize,layerColor){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			var gSize = 12 * layerSize;
			var drawOptions =	{};
			var temporarystyle = OpenLayers.Util.applyDefaults({
				'pointRadius': 6,
				'label':'',
				'graphicWidth': gSize,
				'graphicHeight': gSize,
				'labelYOffset':0,
				'graphicOpacity': 1,
				'externalGraphic': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAIElEQVR4AWOgCYi58P8/CI9qxqGQFEyZZjxgNKoGJQAAXkmLOVqD5tkAAAAASUVORK5CYII='
			}, OpenLayers.Feature.Vector.style.temporary);
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
			this.initDraw(drawOptions,this.drawLayer,'text','text');
		}
	},
	drawRegularPolygon : function(layerSize,layerColor,drawType){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			var sides = 0;
			if(drawType === 'RegularPolygon'){
				sides = 4;
			}else if(drawType === 'circle'){
				sides = 50;
			}
			var drawOptions =	{
				'sides':sides,
				'irregular': true
			};
			var temporarystyle = OpenLayers.Util.applyDefaults({
				pointRadius: 6,
				label:'',
				fillColor:layerColor,
				strokeWidth: layerSize,
				labelYOffset:25,
				strokeColor: '#384163',
				// graphicName: 'circle'
			}, OpenLayers.Feature.Vector.style.temporary);
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
			this.initDraw(drawOptions,this.drawLayer,'RegularPolygon','RegularPolygon');
		}
	},
	drawArrowPolygon : function(layerSize,layerColor){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			var zoomValue = this.map.zoom;
			var arrpwSize = layerSize * Math.pow(0.6,zoomValue-1);
			var drawOptions =	{
				'graphicSize':arrpwSize,
				'mode': 'direction',
				'mutiVertice':true
			};
			var temporarystyle = OpenLayers.Util.applyDefaults({
				pointRadius: 6,
				label:'',
				fillColor:layerColor,
				strokeWidth: layerSize,
				labelYOffset:25,
				strokeColor: '#384163',
				graphicName: 'square'
			}, OpenLayers.Feature.Vector.style.temporary);
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			this.drawLayer.styleMap.styles.temporary = new OpenLayers.Style(temporarystyle);
			this.initDraw(drawOptions,this.drawLayer,'arrowPolygon','arrowPolygon');
		}	
	},
	/**
	 * drawOptions 画笔样式
	 * drawLayer 画图图层
	 * drawType 图形类型
	 * layerType 图形属性
	 */
	initDraw : function(drawOptions, drawLayer, drawType, layerType){
		var drawControls = {
            Point: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Point,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					try {
						var pSize = mapComp.layerSize*15;
						var lSize = 0;
						if(pSize === 15){
							lSize = 20;
						}else if(pSize === 30){
							lSize = 30;
						}else{
							lSize = 50;
						}
						var cLogo = mapComp.getPointLogo(mapComp.layerColor);
						obj.attributes={
							'fcolor' : '',
							'fsize' : '',
							'text':'',
							'size':pSize,
							'color':mapComp.layerColor,
							'strokeColor' : '',
							'type' : layerType,
							'logo' : cLogo,
							'labelY' : -lSize
						};
						drawLayer.redraw();
						if(!(mapComp.dragControl.active)){
							mapComp.dragControl.activate();
						}
						mapComp.clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
					} catch (error) {
						
					}
				}
			}),
			text: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Point,{
				handlerOptions:drawOptions,
				callbacks : {
					done : function(dPoint){
						mapComp.addText(dPoint);
						if(mapComp.dragControl.active){
							mapComp.dragControl.deactivate();
						}
						mapComp.clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
					}
				}
			}),
            LineString: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Path,{
				handlerOptions:drawOptions,
				callbacks : {
					point : function(cPoint){
						if(layerType === 'dynamicLine'){
							mapComp.addLinePoint(cPoint,mapComp.layerSize,mapComp.layerColor);
							mapComp.clickFeatureControl.deactivate();
						}
					}
				},
				featureAdded:function(obj){//完成图形后的监听事件
					obj.attributes = {
						'fcolor' : '',
						'fsize' : '',
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : mapComp.layerColor,
						'type' : layerType,
						'parent' : mapComp.parentId,
						'labelY' : '-20'
					};
					drawLayer.redraw();
					if(!(mapComp.dragControl.active)){
						mapComp.dragControl.activate();
					}
					mapComp.clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
					if(layerType === 'dynamicLine'){
						if(mapComp.dragControl.active){
							mapComp.dragControl.deactivate();
						}
						mapComp.clickFeatureControl.activate();
					}
					
				}
			}),       
            Polygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.Polygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					obj.attributes = {
						'fcolor' : '',
						'fsize' : '',
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : '#384163',
						'type' : layerType,
						'labelY' : '-20'
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					mapComp.clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),
			RegularPolygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.RegularPolygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					obj.attributes = {
						'fcolor' : '',
						'fsize' : '',
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : mapComp.layerSize,
						'strokeColor' : '#384163',
						'type' : layerType,
						'labelY' : '-20'
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					mapComp.clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			}),
			arrowPolygon: new OpenLayers.Control.DrawFeature(drawLayer,OpenLayers.Handler.VerticePolygon,{
				handlerOptions:drawOptions,
				featureAdded:function(obj){//完成图形后的监听事件
					var zoomValue = mapComp.map.zoom;
					var arrowHandler = mapComp.arrowPolygon.handler;
					var arrpwSize = mapComp.layerSize * Math.pow(0.6,zoomValue-1);
					arrowHandler.graphicSize = arrpwSize;
					obj.attributes = {
						'fcolor' : '',
						'fsize' : '',
						'color' : mapComp.layerColor,
						'text' : '',
						'size' : arrpwSize,
						'strokeColor' : '#384163',
						'type' : layerType,
						'labelY' : '-20'
					};
					drawLayer.redraw();
					mapComp.dragControl.activate();
					mapComp.clickFeatureControl.deactivate();//这两个监听需要处理，不然会引起无法删除feature的BUG
				}
			})
        };
		var polygon = drawControls[drawType];
		if(drawType === 'arrowPolygon'){
			this.arrowPolygon = polygon;
		}	
		this.layerHandler = polygon;
		mapComp.map.addControl(polygon);
		polygon.activate(); 
		
		//添加可拖动监听
//		var dragType = 'OpenLayers.Geometry.'+drawType;
//		if(drawType === 'RegularPolygon' || drawType === 'arrowPolygon'){
//			dragType = 'OpenLayers.Geometry.Polygon';
//		}else if(drawType === 'text'){
//			dragType = 'OpenLayers.Geometry.Point';
//		}
//		else if(drawType === 'staticLine'){
//			dragType = 'OpenLayers.Geometry.LineString';
//		}
//		var hander = mapComp.drawLayer.styleMap.styles.temporary.defaultStyle;
//		var dragControl = new OpenLayers.Control.DragFeature(drawLayer, {
//		    geometryTypes: [dragType],
//		    onEnter: function(obj) {
//				mapComp.dragControl.activate();
//				mapComp.clickFeatureControl.activate();
//				hander.label ='双击删除';
//		    },
//		    onLeave: function(obj) {
//				hander.label = '';
//		    }
//		});
//		this.dragControl = dragControl;
//		mapComp.map.addControl(dragControl);
////		 dragControl.activate();
//		if(layerType !== 'dynamicLine'){
//			dragControl.activate();
//		}
//		
//		var clicklTime = null;
//		//增加额外监听
//		var clickFeatureControl = new (OpenLayers.Class(OpenLayers.Control, {
//		    initialize: function(polygon, options) {
//		        OpenLayers.Control.prototype.initialize.apply(this, [options]);
//		        this.layer = polygon;
//		        this.handler = new OpenLayers.Handler.Feature(
//		            this, polygon, {
//		                dblclick: this.dbClickFeature,
//						click:this.clickFeature
//		            }
//		        );
//		    },
//		    dbClickFeature: function(feature) {
//				if(clicklTime){
//					window.clearTimeout(clicklTime);
//				}
//				var feaType = feature.attributes.type;
//				if(feaType === 'dynamicLine' || feaType === 'dynamicLinePoint'){
//					mapComp.removeDynamicLine(feature);
//				}else{
//					drawLayer.removeFeatures([feature]);
//				}
//				mapComp.removeTextWin(feature.id);
//				dragControl.deactivate();
//				mapComp.clickFeatureControl.activate();
//				mapComp.drawLayer.styleMap.styles.temporary.defaultStyle.label = '';
//		    },
//			clickFeature:function(feature){
//				if(clicklTime){
//					window.clearTimeout(clicklTime);
//				}
//				clicklTime = window.setTimeout(function(){
//					var fType = feature.attributes.type;
//					if(fType === 'point' || fType === 'polygon' || fType === 'RegularPolygon' || fType === 'arrowPolygon'){
//						mapComp.addLayerText(feature);
//					}
//				},200);
//			}
//		}))(drawLayer);
//		mapComp.clickFeatureControl = clickFeatureControl;
//		mapComp.map.addControl(clickFeatureControl);
//		clickFeatureControl.activate();
//		console.info(mapComp.map);
	},
	addLayerControl : function(drawType){
		//添加可拖动监听
		var dragType = 'OpenLayers.Geometry.'+drawType;
		if(drawType === 'RegularPolygon' || drawType === 'arrowPolygon'){
			dragType = 'OpenLayers.Geometry.Polygon';
		}else if(drawType === 'text'){
			dragType = 'OpenLayers.Geometry.Point';
		}else if(drawType === 'staticLine'){
			dragType = 'OpenLayers.Geometry.LineString';
		}
		var hander = mapComp.drawLayer.styleMap.styles.temporary.defaultStyle;
		var dragControl = new OpenLayers.Control.DragFeature(mapComp.drawLayer, {
		    geometryTypes: [dragType],
		    onEnter: function(obj) {
				if(!mapComp.dragControl.active){
					mapComp.dragControl.activate();
				}
				if(!clickFeatureControl.active){
					clickFeatureControl.activate();
				}
				hander.label ='双击删除';
		    },
		    onLeave: function(obj) {
				hander.label = '';
		    }
		});
		this.dragControl = dragControl;
		this.map.addControl(dragControl);
		dragControl.activate();
		
		var clicklTime = null;
		//增加额外监听
		var clickFeatureControl = new (OpenLayers.Class(OpenLayers.Control, {
		    initialize: function(polygon, options) {
		        OpenLayers.Control.prototype.initialize.apply(this, [options]);
		        this.layer = polygon;
		        this.handler = new OpenLayers.Handler.Feature(
		            this, polygon, {
		                dblclick: this.dbClickFeature,
						click:this.clickFeature
		            }
		        );
		    },
		    dbClickFeature: function(feature) {
				if(clicklTime){
					window.clearTimeout(clicklTime);
				}
				var feaType = feature.attributes.type;
				if(feaType === 'dynamicLine' || feaType === 'dynamicLinePoint'){
					mapComp.removeDynamicLine(feature);
				}else{
					mapComp.drawLayer.removeFeatures([feature]);
				}
				mapComp.removeTextWin(feature.id);
				dragControl.deactivate();
				mapComp.clickFeatureControl.activate();
				mapComp.drawLayer.styleMap.styles.temporary.defaultStyle.label = '';
		    },
			clickFeature:function(feature){
				if(clicklTime){
					window.clearTimeout(clicklTime);
				}
				clicklTime = window.setTimeout(function(){
					var fType = feature.attributes.type;
					if(fType === 'point' || fType === 'polygon' || fType === 'RegularPolygon' || fType === 'arrowPolygon'){
						mapComp.addLayerText(feature);
					}
				},200);
			}
		}))(mapComp.drawLayer);
		this.clickFeatureControl = clickFeatureControl;
		mapComp.map.addControl(clickFeatureControl);
		clickFeatureControl.activate();
	},
	removeTextWin : function(featureId){
		if(typeof(mapComp.layerDoc) !== 'undefined'){
			if(mapComp.layerDoc){
				if(typeof(featureId) !== 'undefined'){
					if(mapComp.layerDoc.getAttribute('layerId') === featureId){
						T(mapComp.layerDoc).remove();
						mapComp.layerDoc = null;
					}
				}else{
					T(mapComp.layerDoc).remove();
					mapComp.layerDoc = null;
				}
			}
			
		}
	},
	addLayerText : function(feature){
		if(typeof(mapComp.layerDoc) !== 'undefined'){
			if(mapComp.layerDoc){
				T(mapComp.layerDoc).remove();
			}
		}
		var centroid = feature.geometry.getCentroid();
		var featureId = feature.id;
		var lonlat = new OpenLayers.LonLat(centroid.x,centroid.y);
		var pixel = mapComp.map.getPixelFromLonLat(lonlat);
		var layerText = feature.attributes.text;
		var layerDoc = mapTextComp.init(pixel,layerBack,layerText,featureId);
		mapComp.layerDoc = layerDoc;
		document.body.appendChild(layerDoc);
		function layerBack(tDatas){
			if(tDatas.type === 'submit'){
				feature.attributes.text = tDatas.value;
				feature.attributes.fcolor = mapComp.layerColor;
				feature.attributes.fsize = mapComp.layerSize*12;
				mapComp.drawLayer.redraw();
			}
			mapComp.layerDoc = null;
			T(layerDoc).remove();
		}
	},
	addText : function(pt){
		if(typeof(mapComp.textDoc) !== 'undefined'){
			if(mapComp.textDoc){
				T(mapComp.textDoc).remove();
			}
		}
		var lonlat = new OpenLayers.LonLat(pt.x,pt.y);
		var pixel = this.map.getPixelFromLonLat(lonlat);
		var textDoc = mapTextComp.init(pixel,textBack);
		this.textDoc = textDoc;
		document.body.appendChild(textDoc);
		function textBack(tDatas){
			if(tDatas.type === 'submit'){
				mapComp.addMapText(pt,tDatas.value);
			}
			mapComp.textDoc = null;
			T(textDoc).remove();
		}
	},
	setLayerPro : function(layerSize,layerColor,currToolType){
		if(typeof(mapComp.drawLayer) !== 'undefined'){
			this.layerSize = layerSize;
			this.layerColor = layerColor;
			var changeObj = this.drawLayer.styleMap.styles.temporary.defaultStyle;
			changeObj.fillColor = layerColor;
			changeObj.strokeWidth = layerSize;
			if(currToolType === 'marker'){
				changeObj.graphicHeight = layerSize*15;
				changeObj.graphicWidth = layerSize*15;
				var cLogo = mapComp.getPointLogo(layerColor);
				changeObj.externalGraphic = cLogo;
			}else if(currToolType === 'text'){
				changeObj.graphicHeight = layerSize*12;
				changeObj.graphicWidth = layerSize*12;
			}
			if(typeof(this.arrowPolygon) !== 'undefined'){
				var zoomValue = this.map.zoom;
				var arrpwSize = layerSize * Math.pow(0.6,zoomValue-1);
				this.arrowPolygon.handler.graphicSize = arrpwSize;
			}
		}
	},
	getDrawLayer : function(){
		return this.drawLayer;
	},
	removeDrawLayer : function(){
		if(typeof(this.drawLayer) !== 'undefined'){
			this.map.removeLayer(this.drawLayer);
			this.clearHander();
			this.drawLayer = 'undefined';
			mapComp.removeTextWin();
		}
	},
	saveAllFeature : function(caseId){
		var featureList = this.drawLayer.features;
		if(featureList.length > 0){
			var layerJson = {};
			for(var key in featureList){
				var lAttr = featureList[key].attributes;
				var lText = lAttr.text;
				var lSize = lAttr.size;
				var lColor = lAttr.color;
				var lFontSize = lAttr.fsize;
				var lFontColor = lAttr.fcolor;
				var lType = lAttr.type;
				var lGeometry = featureList[key].geometry.toString();
				var lObj = new Object({});
				lObj.type = lType;
				lObj.text = lText;
				lObj.size = lSize;
				lObj.color = lColor;
				lObj.fsize = lFontSize;
				lObj.fcolor = lFontColor;
				lObj.geometry = lGeometry;
				if(typeof(layerJson[lType]) === 'undefined'){
					layerJson[lType] = [];
				}
				var tempArr = [];
				tempArr = layerJson[lType];
				tempArr.push(lObj);
				layerJson[lType] = tempArr;
			}
			var cMapZoom = mapComp.map.zoom;
			var cMapCenter = mapComp.map.center;
			layerJson.zoom = cMapZoom;
			layerJson.lon = cMapCenter.lon;
			layerJson.lat = cMapCenter.lat;
			layerJson.caseId = caseId;
			// var str = JSON.stringify(layerJson);
			// console.info(str);
			return layerJson;
		}
		return '';
	},
	removeLasFeature : function(){
		var featureList = this.drawLayer.features;
		if(featureList.length > 0){
			var deleteFeature = featureList[featureList.length-1];
			if(deleteFeature.attributes.type === 'dynamicLine'){
				mapComp.removeDynamicLine(deleteFeature);
			}else{
				this.drawLayer.removeFeatures([deleteFeature]);
			}
			mapComp.removeTextWin(deleteFeature.id);
		}
	},
	removeAllFeatures : function(){
		var featureList = this.drawLayer.features;
		if(featureList.length > 0){
			var tempFea = [];
			for(var key in featureList){
				tempFea.push(featureList[key]);
				mapComp.removeTextWin(featureList[key].id);
			}
			this.drawLayer.removeFeatures(tempFea);
		}
	},
	clearHander : function(){//取消作图
		if(typeof(this.layerHandler) !== 'undefined'){
			this.layerHandler.deactivate();
//			this.dragControl.deactivate();
//			this.clickFeatureControl.deactivate();
		}
	},
	changPenModel : function(status,drawType){
		if(drawType !== 'dynamicLine'){
//			console.info(this.layerHandler);
			try {
				this.layerHandler.handler.freehand = !status;
			} catch (error) {
				console.info(error.message);
			}
		}
	},
	addMapText : function(pt,text){
		var pSize = mapComp.layerSize*12;
		var point = new OpenLayers.Geometry.Point(pt.x,pt.y);
		var pointStyle = {
			cursor : 'pointer',
			label:text,
			fontColor:mapComp.layerColor,
			fontSize:pSize
		};
		var pointFeature = new OpenLayers.Feature.Vector(point,null, pointStyle);
		pointFeature.attributes = {
			'fcolor' : mapComp.layerColor,
			'fsize' : mapComp.layerSize,
			'color' : mapComp.layerColor,
			'text' : text,
			'size' : mapComp.layerSize,
			'type' : 'text'
		};
		this.drawLayer.addFeatures([pointFeature]);
	},
	getPointLogo : function(color){
		return this.logoList[color].logo;
	},
	addLinePoint : function(pt,outSize,outColor){
		var point = new OpenLayers.Geometry.Point(pt.x,pt.y);
		var pointR = 4 * outSize;
		var pointStyle = {
			pointRadius: pointR,
			fillColor:"white",
			strokeColor:outColor,
			cursor : 'pointer',
			strokeWidth: outSize,
			label:''
		};
		var pointFeature = new OpenLayers.Feature.Vector(point,null, pointStyle);
		var parentId = pt.parent.id;
		pointFeature.attributes = {
			'fcolor' : '',
			'fsize' : '',
			'text' : '',
			'size' : outSize,
			'color' : outColor,
			"parent" : parentId,
			'type' : 'dynamicLinePoint'
		};
		this.parentId = parentId;
		this.drawLayer.addFeatures([pointFeature]);
	},
	removeDynamicLine : function(feature){
		var parentId = feature.attributes.parent;
		var curFeatures = this.drawLayer.features;
		var tempArr = [];
		for(var key in curFeatures){
			if(curFeatures[key].attributes.parent === parentId){
				tempArr.push(curFeatures[key]);
			}
		}
		this.drawLayer.removeFeatures(tempArr);
	},
	restoreLayer : function(jsonDatas){
//		var jsonDatas = {"Point":[{"type":"Point","text":"","size":15,"color":"#ed3f2b","fsize":"","fcolor":"","geometry":"POINT(113.583984375 26.6357421875)"}],"dynamicLinePoint":[{"type":"dynamicLinePoint","text":"","size":"1","color":"#ed3f2b","fsize":"","fcolor":"","geometry":"POINT(116.8798828125 28.6572265625)"},{"type":"dynamicLinePoint","text":"","size":"1","color":"#ed3f2b","fsize":"","fcolor":"","geometry":"POINT(116.4404296875 25.2294921875)"},{"type":"dynamicLinePoint","text":"","size":"1","color":"#ed3f2b","fsize":"","fcolor":"","geometry":"POINT(111.7822265625 20.0439453125)"}],"dynamicLine":[{"type":"dynamicLine","text":"","size":"1","color":"#ed3f2b","fsize":"","fcolor":"","geometry":"LINESTRING(116.8798828125 28.6572265625,116.4404296875 25.2294921875,111.7822265625 20.0439453125)"}],"text":[{"type":"text","text":"dfd","size":"1","color":"#ed3f2b","fsize":"1","fcolor":"#ed3f2b","geometry":"POINT(118.1982421875 26.591796875)"}],"arrowPolygon":[{"type":"arrowPolygon","text":"","size":0.1296,"color":"#ed3f2b","fsize":"","fcolor":"","geometry":"POLYGON((114.74831881013131 25.554202599257284,114.70480618986869 25.432125525742716,117.65751088001711 24.379676329254167,117.6139982597545 24.2575992557396,119.15561953522264 23.914490267767178,117.74453612054235 24.623830476283302,117.70102350027973 24.501753402768735,114.74831881013131 25.554202599257284))"}],"RegularPolygon":[{"type":"RegularPolygon","text":"","size":"1","color":"#96c130","fsize":"","fcolor":"","geometry":"POLYGON((121.09677033549069 27.15304624857549,120.91867959150662 27.17260980770115,120.74481290497604 27.211428396938356,120.57791225740846 27.268889823945738,120.4206097717176 27.344087887693593,120.27538620207078 27.435836669795474,120.14453181091368 27.542689237149567,120.03011025016347 27.66296046093807,119.93392601618532 27.794753592115292,119.85749599180672 27.935990174273165,119.80202552416922 28.084442822140414,119.76838941568391 28.237770348778866,119.75711812787486 28.3935546875,119.76838941568391 28.549339026221137,119.80202552416922 28.702666552859586,119.85749599180672 28.851119200726835,119.93392601618532 28.992355782884708,120.03011025016347 29.12414891406193,120.14453181091368 29.244420137850433,120.27538620207078 29.351272705204526,120.4206097717176 29.443021487306407,120.57791225740846 29.518219551054262,120.74481290497604 29.575680978061644,120.91867959150662 29.61449956729885,121.09677033549069 29.63406312642451,121.27627653950931 29.63406312642451,121.45436728349338 29.61449956729885,121.62823397002396 29.575680978061644,121.79513461759154 29.518219551054262,121.9524371032824 29.443021487306407,122.09766067292922 29.351272705204526,122.22851506408632 29.244420137850433,122.34293662483653 29.12414891406193,122.43912085881468 28.992355782884708,122.51555088319328 28.851119200726835,122.57102135083078 28.702666552859586,122.60465745931609 28.549339026221134,122.61592874712514 28.3935546875,122.60465745931609 28.237770348778866,122.57102135083078 28.084442822140414,122.51555088319328 27.935990174273165,122.43912085881468 27.794753592115292,122.34293662483653 27.66296046093807,122.22851506408632 27.542689237149567,122.09766067292922 27.435836669795474,121.9524371032824 27.344087887693593,121.79513461759154 27.268889823945738,121.62823397002396 27.211428396938356,121.45436728349338 27.17260980770115,121.27627653950931 27.15304624857549,121.09677033549069 27.15304624857549))"},{"type":"RegularPolygon","text":"","size":"1","color":"#96c130","fsize":"","fcolor":"","geometry":"POLYGON((120.3955078125 23.603515625,120.3955078125 26.2841796875,121.93359375 26.2841796875,121.93359375 23.603515625,120.3955078125 23.603515625))"}],"polygon":[{"type":"polygon","text":"","size":"1","color":"#d523c8","fsize":"","fcolor":"","geometry":"POLYGON((111.5185546875 23.2080078125,111.6064453125 23.2080078125,111.73828125 23.0322265625,112.001953125 22.8564453125,112.3095703125 22.63671875,112.6611328125 22.3291015625,112.96875 22.021484375,113.1884765625 21.845703125,113.49609375 21.58203125,113.7158203125 21.494140625,113.8916015625 21.318359375,114.111328125 21.23046875,114.375 21.142578125,114.5068359375 21.0986328125,114.814453125 21.0546875,114.9462890625 21.0107421875,115.0341796875 21.0107421875,115.166015625 21.0107421875,115.25390625 20.9228515625,115.2978515625 20.9228515625,111.5185546875 23.2080078125))"},{"type":"polygon","text":"","size":"1","color":"#d523c8","fsize":"","fcolor":"","geometry":"POLYGON((109.5849609375 28.701171875,109.453125 28.701171875,109.3212890625 28.5693359375,109.013671875 28.349609375,108.5302734375 27.822265625,108.134765625 27.3828125,107.9150390625 26.9873046875,107.9150390625 26.6796875,108.1787109375 26.3720703125,108.3544921875 26.328125,108.6181640625 26.2841796875,108.8818359375 26.2841796875,109.189453125 26.2841796875,109.4970703125 26.328125,109.9365234375 26.50390625,110.2880859375 26.767578125,110.5078125 26.9873046875,110.771484375 27.20703125,110.947265625 27.4267578125,111.0791015625 27.646484375,111.2548828125 28.0859375,111.38671875 28.4375,111.38671875 28.701171875,111.4306640625 28.9208984375,111.474609375 29.140625,111.474609375 29.3603515625,111.474609375 29.580078125,111.474609375 29.755859375,111.474609375 29.8876953125,111.4306640625 29.9755859375,111.4306640625 30.01953125,111.298828125 30.1513671875,111.2109375 30.2392578125,111.1669921875 30.2392578125,111.123046875 30.2392578125,111.03515625 30.2392578125,110.9912109375 30.2392578125,110.9033203125 30.2392578125,110.8154296875 30.2392578125,109.5849609375 28.701171875))"}],"staticLine":[{"type":"staticLine","text":"","size":"3","color":"#d523c8","fsize":"","fcolor":"","geometry":"LINESTRING(126.328125 28.5693359375,126.1962890625 28.5693359375,126.0205078125 28.5693359375,125.8447265625 28.5693359375,125.3173828125 28.349609375,124.658203125 27.4267578125,124.2626953125 26.6796875,124.04296875 25.9326171875,124.04296875 25.361328125,124.306640625 24.658203125,124.6142578125 24.2626953125,124.921875 23.8671875,125.09765625 23.6474609375,125.185546875 23.4716796875,125.2294921875 23.2958984375,125.2294921875 23.0322265625,125.2294921875 22.8564453125,124.7900390625 22.4169921875,124.21875 22.197265625,123.515625 21.9775390625,122.63671875 21.8896484375,121.669921875 21.7578125,120.7470703125 21.7138671875,119.8681640625 21.7138671875,119.3408203125 21.58203125,119.033203125 21.58203125,118.9453125 21.58203125,118.9013671875 21.58203125,118.857421875 21.58203125,118.8134765625 21.58203125,118.76953125 21.58203125,118.681640625 21.58203125,118.4619140625 21.58203125,118.2861328125 21.58203125,117.978515625 21.58203125,117.6708984375 21.58203125,117.451171875 21.4501953125,117.275390625 21.3623046875,117.2314453125 21.0986328125,117.2314453125 20.9228515625,117.2314453125 20.4833984375,117.2314453125 20.17578125,117.2314453125 19.6484375,117.2314453125 19.1650390625,117.099609375 18.6376953125,116.8359375 18.1982421875,116.4404296875 17.7587890625,115.9130859375 17.4072265625,115.2099609375 17.1875,114.3310546875 17.01171875,113.4521484375 16.8798828125,112.5732421875 16.8798828125,111.6943359375 16.8798828125,110.6396484375 16.8798828125,110.2001953125 17.0556640625,109.7607421875 17.275390625,109.4970703125 17.5390625,109.3212890625 17.802734375,109.2333984375 17.978515625,109.1455078125 18.1103515625,109.013671875 18.2421875,109.013671875 18.2861328125,108.9697265625 18.330078125,108.8818359375 18.41796875,108.837890625 18.505859375,108.75 18.681640625,108.662109375 18.857421875,108.6181640625 19.033203125,108.57421875 19.12109375,108.57421875 19.296875)"}],"zoom":5,"lon":120.20796020508,"lat":20,"caseId":""};
		mapComp.initDrawLayer();
		mapComp.restoreElement(jsonDatas);
		console.info(jsonDatas);
	},
	restoreElement : function(pData){
		var tempFeatures = [];
		this.map.setCenter(new OpenLayers.LonLat(pData.lon,pData.lat),pData.zoom);
		for(var key in pData){
			var tempData = pData[key];
			for(var eKey in tempData){
				var currData = tempData[eKey];
				if(typeof(currData.geometry) !== 'undefined'){
					if((currData.type).indexOf('dynamicLine') == -1){
//						console.info(currData.type);
						var geometry = new OpenLayers.Geometry.fromWKT(currData.geometry);
						var reFeature = new OpenLayers.Feature.Vector(geometry);
						reFeature.attributes = {
							'color' : currData.color,
							'fcolor' : currData.fcolor,
							'fsize' : currData.fsize,
							'size' : currData.size,
							'text' : currData.text,
							'strokeColor': '#384163',
							'type' : currData.type,
							'logo' : '',
							'labelY' : '',
							'pointRadius' : ''
						};
						if(currData.type === 'point'){
							var pSize = currData.size;
							var cLogo = mapComp.getPointLogo(currData.color);
							var lSize = 0;
							if(pSize === 15){
								lSize = 20;
							}else if(pSize === 30){
								lSize = 30;
							}else{
								lSize = 50;
							}
							reFeature.attributes.labelY =  lSize;
							reFeature.attributes.logo =  cLogo;
						}
						tempFeatures.push(reFeature);
//						mapComp.addLayerControl(currData.type);
					}else{
						// if(currData.type === 'dynamicLinePoint'){
						// 	var pointR =  currData.size * 4;
						// 	reFeature.attributes.strokeColor = currData.color;
						// 	reFeature.attributes.color = 'white';
						// 	reFeature.attributes.pointRadius = pointR;
						// }else if(currData.type === 'dynamicLine'){
						// 	reFeature.attributes.strokeColor = currData.color;
						// }
					}
				}
			}
		}
		mapComp.drawLayer.addFeatures(tempFeatures);
	}
};

//画实心，空心箭头工具的控制器
OpenLayers.Handler.VerticePolygon = OpenLayers.Class(OpenLayers.Handler.Drag, {
    sides: 7, circleEnd1:null,  circleEnd2:null,  radius: null,
    mutiVertice:false, leftFocus:null,  mouseAction:null, rightFocus:null,
    circleRing:null, circleRing2:null, arrowRing:null,  snapAngle: null,
    mode:null, circleAngle:null, circleRadius:null, snapToggle: 'shiftKey',
    layerOptions: null,  persist: false,graphicSize:null,
    ringStart1:null, ringStart2:null, irregular: false,citeCompliant: true,
    angle: null, fixedRadius: true,  circleIn:null, circleOut:null,
    feature: null, layer: null, radius2:null,  origin: null, originchan:null,
    polygon:null,  circleCenter:null,
    
    initialize: function(control, callbacks, options) {
        if(!(options && options.layerOptions && options.layerOptions.styleMap)) {
            this.style = OpenLayers.Util.extend(OpenLayers.Feature.Vector.style['default'], {});
        }
        OpenLayers.Handler.Drag.prototype.initialize.apply(this, [control, callbacks, options]);
        this.options = (options) ? options : {};
    },
    setOptions: function (newOptions) {
        OpenLayers.Util.extend(this.options, newOptions);
        OpenLayers.Util.extend(this, newOptions);
    },
    activate: function() {
        var activated = false;
        if(OpenLayers.Handler.Drag.prototype.activate.apply(this, arguments)) {
            var options = OpenLayers.Util.extend({
                displayInLayerSwitcher: false,
                calculateInRange: OpenLayers.Function.True,
                wrapDateLine: this.citeCompliant
            }, this.layerOptions);
            this.layer = new OpenLayers.Layer.Vector(this.CLASS_NAME, options);
            this.map.addLayer(this.layer);
            activated = true;
        }
        return activated;
    },
    deactivate: function() {
        var deactivatedstatus = false;
        if(OpenLayers.Handler.Drag.prototype.deactivate.apply(this, arguments)) {
            if(this.dragging) {
                this.cancel();
            }
            if (this.layer.map !== null) {
                this.layer.destroy(false);
                if (this.feature) {
                    this.feature.destroy();
                }
            }
            this.layer = null;
            this.feature = null;
            deactivatedstatus = true;
        }
        return deactivatedstatus;
    },
    down: function(evt) {
    	this.layer.removeAllFeatures();
	    this.fixedRadius = !!(this.radius);
	    var maploc = this.layer.getLonLatFromViewPortPx(evt.xy); 
		    this.origin = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
		    this.originchan = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
		    if(!this.fixedRadius || this.irregular) {
		        this.radius = this.map.getResolution();
		    }
		    if(this.persist) {
		        this.clear();
		    }
		    this.feature = new OpenLayers.Feature.Vector();
		    this.mouseAction ='down';
		    this.createGeometry();
	    	this.callback("create", [this.origin, this.feature]);
		    this.layer.addFeatures([this.feature], {silent: true});
		    this.layer.drawFeature(this.feature, this.style);
    },
    move: function(evt) {
    	this.mouseAction='move';
        var maploc = this.layer.getLonLatFromViewPortPx(evt.xy); 
        var point = new OpenLayers.Geometry.Point(maploc.lon, maploc.lat);
       if(this.irregular) {
            var ry = Math.sqrt(2) * Math.abs(point.y - this.origin.y) / 2;
            this.radius = Math.max(this.map.getResolution() / 2, ry);
       }else if(this.fixedRadius) {
            this.origin = point;
        } else {
            var angle= this.calculateAngle(point, evt);
            this.radius = point.distanceTo(this.originchan);
            this.radius2 = point.distanceTo(this.originchan);
            this.circleAngle = angle+angle;
        }
        this.modifyGeometry();
        this.layer.drawFeature(this.feature, this.style);
    },
    up: function(evt) {
        this.finalize();
        if (this.start == this.last) {
            this.callback("done", [evt.xy]);
        }
    },
    out: function(evt) {
        this.finalize();
    },
    createGeometry: function() {
    	if(this.mode =="direction"){
	    	if(this.graphicSize ===null){
	    		this.graphicSize =0.02;
	    	}
	    	
	        this.radius=0.01;
		    var points = [];
		    var pointstartup,  pointStartdown, pointMiddleup1, pointMiddleup2, pointMiddledown,pointMiddledown2, pointEnd;
			pointstartup =new OpenLayers.Geometry.Point(this.origin.x,this.origin.y+this.graphicSize/2);
			pointStartdown = new OpenLayers.Geometry.Point(this.origin.x,this.origin.y-this.graphicSize/2);
			pointMiddleup1 = new  OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y+this.graphicSize/2);
			pointMiddleup2 = new  OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y+this.graphicSize/2*3);
			pointMiddledown = new OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y-this.graphicSize/2);
			pointMiddledown2 = new OpenLayers.Geometry.Point(this.origin.x+(this.radius*2/3),this.origin.y-this.graphicSize/2*3);
			pointEnd = new OpenLayers.Geometry.Point(this.origin.x+this.radius,this.origin.y);
			points.push(pointstartup,pointStartdown,pointMiddledown,pointMiddledown2,pointEnd,pointMiddleup2,pointMiddleup1);
		    var ring = new OpenLayers.Geometry.LinearRing(points);
		    var polygon = new OpenLayers.Geometry.Polygon([ring]);
		    this.feature.geometry =polygon;
	    }else{
            this.circleCenter = new OpenLayers.Geometry.Point(this.originchan.x-0.04,this.originchan.y);
            this.circleRing = this.createCircleRing(this.circleCenter,this.circleCenter,this.originchan,Math.PI/3*2,0.05,15,305);
            this.circleRing2 = this.createCircleRing(this.circleCenter,this.circleCenter,this.originchan,Math.PI/3*2,0.04,15,301.5);
            //this.ringStart1 =this.circleRing[0];
            this.ringStart2 =this.circleRing2[0];
            var x1 = this.circleRing[this.circleRing.length-1].x;
            var x2 = this.circleRing2[this.circleRing2.length-1].x;
            var y1 = this.circleRing[this.circleRing.length-1].y;
            var y2=  this.circleRing2[this.circleRing2.length-1].y;
            var arrowLeft = new OpenLayers.Geometry.Point(x1+0.02*Math.cos(Math.PI/3),y1+0.02*Math.sin(Math.PI/3));
            var arrowRight =new OpenLayers.Geometry.Point(x2-0.02*Math.cos(Math.PI/3),y2-0.02*Math.sin(Math.PI/3));
            var y3 = y1>y2?y1:y2;
            var arrowEnd = new OpenLayers.Geometry.Point((x1+x2)/2,y3+0.02);
            var arrowPoint =[];
            for(var i =0;i<this.circleRing.length;i++){
                arrowPoint.push(this.circleRing[i]);
            }
            arrowPoint.push(arrowLeft,arrowEnd,arrowRight);
            for(var k=this.circleRing2.length-1;k>=0;k--){
                arrowPoint.push(this.circleRing2[k]);
            }
            var nring = new OpenLayers.Geometry.LinearRing(arrowPoint);
            this.polygon = new OpenLayers.Geometry.Polygon([nring]);
            this.feature.geometry =this.polygon;
        }
    },
    modifyGeometry: function() {
        var angle, point,moveRadius;
        var ring = this.feature.geometry.components[0];
        angle = this.angle;
        disAngle=Math.PI/2+angle;
        moveRadius = this.radius-0.01;
        var graSize = this.graphicSize;
        var oriPoint = this.originchan;
        this.circleAngle = 2*(angle-(Math.PI/2));
		this.circleRadius =this.radius2;
		var center =new OpenLayers.Geometry.Point(this.originchan.x-this.circleRadius,this.originchan.y);
		var center2 =new OpenLayers.Geometry.Point(this.originchan.x+this.circleRadius,this.originchan.y);
		if(this.mode=="direction"){
			redrawPolygonByMove(angle,oriPoint,ring,moveRadius,graSize,disAngle);
		}else{
			var oriAngle =angle;
			var circleRing=this.createCircleRing(center,center2,this.originchan,oriAngle,this.circleRadius+0.01,15,305);
			var circleRing2=this.createCircleRing(center,center2,this.originchan,oriAngle,this.circleRadius,15,301);
			var arrowStart = circleRing[circleRing.length-1];
			var arrowEnd = circleRing2[circleRing2.length-1];
			var arrowPoints =this.countArrow(arrowStart,arrowEnd,oriAngle);
			for(var i=0;i<ring.components.length;i++){
				point =ring.components[i];
				if(i<circleRing.length){
					point.x= circleRing[i].x;
					point.y= circleRing[i].y;
					point.clearBounds();
				}else if(i<=circleRing.length+2&&i>=circleRing.length){
					if(i==this.circleRing.length){
						point.x =arrowPoints[0].x;
						point.y =arrowPoints[0].y;
						point.clearBounds();
					}else if( i==circleRing.length+1){
						point.x =arrowPoints[1].x;
						point.y =arrowPoints[1].y;
						point.clearBounds();
					}else if (i==circleRing.length+2){
						point.x =arrowPoints[2].x;
						point.y =arrowPoints[2].y;
						point.clearBounds();
					}
				}else{
					point.x= circleRing2[ring.components.length-1-i].x;
					point.y= circleRing2[ring.components.length-1-i].y;
					point.clearBounds();
				}
			}
			this.roratePolygon(oriAngle,this.originchan);
			this.layer.drawFeature(this.feature, this.style);
         }
    		
    },
    calculateAngle: function(point, evt) {
        var alpha = Math.atan2(point.y - this.originchan.y,
                               point.x - this.originchan.x);
        if(this.snapAngle && (this.snapToggle && !evt[this.snapToggle])) {
            var snapAngleRad = (Math.PI / 180) * this.snapAngle;
            this.angle = Math.round(alpha / snapAngleRad) * snapAngleRad;
        } else {
            this.angle = alpha;
        }
    },
    destroyFeature: function(force) {
        if(this.layer && (force || !this.persist)) {
            this.layer.destroyFeatures();
        }
        this.point = null;
        this.line =null;
    },
    cancel: function() {
        this.callback("cancel", null);
        this.finalize();
    },
    finalize: function() {
        this.origin = null;
        this.radius = this.options.radius;
    },
    clear: function() {
        if (this.layer) {
            this.layer.renderer.clear();
            this.layer.destroyFeatures();
        }
    },
    callback: function (name, args) {
		        if (this.callbacks[name]) {
		        	if(this.radius2 >0.03){
		            this.callbacks[name].apply(this.control,
		                                       [this.feature.geometry.clone()]);
		        	}
		        }
        if(!this.persist && (name == "done" || name == "cancel")) {
            this.clear();
        }
        if(name=="done"){
        	this.radius2=this.options.radius2;
        }
    },
     createCircleRing:function(origin,originr,center,oriAngle,radius,sides,rotation){
    	 var angle = Math.atan2(origin.y - center.y,
                 origin.x - center.x);
	    var rotatedAngle, x, y;
	    var points = [];
	   
	    points.push(center);
	    for(var i=0; i<sides; ++i) {
	    	var an = i*((360 - rotation)/360);
	    	if(oriAngle>0&&oriAngle<Math.PI/2){
	    		rotatedAngle =  angle-(an * 2 * Math.PI / sides)+Math.PI;
		        x = originr.x -(radius * Math.cos(rotatedAngle));
		        y = originr.y - (radius * Math.sin(rotatedAngle));
		     
	    	}else if(oriAngle>Math.PI/2&&oriAngle<Math.PI){
	    	rotatedAngle =  angle+(an * 2 * Math.PI / sides)+Math.PI;
		        x = origin.x +(radius * Math.cos(rotatedAngle));
		        y = origin.y + (radius * Math.sin(rotatedAngle));
	    	}else if(oriAngle>-Math.PI&&oriAngle<-Math.PI/2){
	    		rotatedAngle =  angle-(an * 2 * Math.PI / sides)-Math.PI;
		        x = origin.x +(radius * Math.cos(rotatedAngle));
		        y = origin.y + (radius * Math.sin(rotatedAngle));
	    	}else if(oriAngle>-Math.PI/2&&oriAngle<0){
	    		rotatedAngle =  angle+(an * 2 * Math.PI / sides);
		        x = originr.x +(radius * Math.cos(rotatedAngle));
		        y = originr.y +(radius * Math.sin(rotatedAngle));
		  
	    	}
	        
	        if(i==sides-1){
	        	this.circleEnd1 = new OpenLayers.Geometry.Point(x,y);
	        }else if(i===0){
	        	this.circleEnd2 =  new OpenLayers.Geometry.Point(x,y);
	        }
	        points.push(new OpenLayers.Geometry.Point(x,y));
	    }
	    return points;
    			 
    	 },
    countArrow:function(arrowStart,arrowEnd,oriAngle){
    	var arrowSta, arrowEnd2,arrowMidl;
    	var arrowPoint =[];
    	var x1,x2,y1,y2,x3,y3;
    	if(oriAngle>0&&oriAngle<Math.PI/2){
    		x1 =arrowStart.x-0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y+0.015*Math.sin(Math.PI/3)-0.01;
			x2 =arrowEnd.x-0.015*Math.cos(Math.PI/3)-0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y-0.015*Math.sin(Math.PI/3)-0.01*(this.circleRadius/0.25);
			x3 =  (arrowStart.x>arrowEnd.x? arrowStart.x:arrowEnd.x)+0.02;
			y3 = (arrowStart.y+arrowEnd.y)/2+0.01;
    	}else if(oriAngle>Math.PI/2&&oriAngle<Math.PI){
    		x1 =arrowStart.x+0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y+0.015*Math.sin(Math.PI/3)-0.01;
			x2 =arrowEnd.x+0.015*Math.cos(Math.PI/3)+0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y-0.015*Math.sin(Math.PI/3)-0.01*(this.circleRadius/0.25);
			x3 = (arrowStart.x<arrowEnd.x? arrowStart.x:arrowEnd.x)-0.02;
			y3 =(arrowStart.y+arrowEnd.y)/2+0.01;
    	}else if(oriAngle>-Math.PI&&oriAngle<-Math.PI/2){
    		x1 =arrowStart.x+0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y-0.015*Math.sin(Math.PI/3);
			x2 =arrowEnd.x+0.015*Math.cos(Math.PI/3)+0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y+0.015*Math.sin(Math.PI/3)+0.01*(this.circleRadius/0.25);
			x3 = (arrowStart.x<arrowEnd.x? arrowStart.x:arrowEnd.x)-0.02;
			y3 = (arrowStart.y+arrowEnd.y)/2-0.01;
    	}else if(oriAngle>-Math.PI/2&&oriAngle<0){
    		x1 =arrowStart.x-0.015*Math.cos(Math.PI/3);
			y1 =arrowStart.y-0.015*Math.sin(Math.PI/3)+0.01;
			x2 =arrowEnd.x-0.015*Math.cos(Math.PI/3)-0.01*(this.circleRadius/0.25);
			y2 =arrowEnd.y+0.015*Math.sin(Math.PI/3)+0.01*(this.circleRadius/0.25);
			x3 =  (arrowStart.x>arrowEnd.x? arrowStart.x:arrowEnd.x)+0.02;
			y3 = (arrowStart.y+arrowEnd.y)/2-0.01;
    	}
    	arrowSta = new OpenLayers.Geometry.Point(x1,y1);
    	arrowEnd2 = new OpenLayers.Geometry.Point(x2,y2);
    	arrowMidl = new OpenLayers.Geometry.Point(x3,y3);
    	arrowPoint.push(arrowSta,arrowMidl,arrowEnd2);
    	return arrowPoint;
    	
    },
    roratePolygon:function(oriAngle,origin){
    	var ring =this.feature.geometry.components[0];
        if(oriAngle>0&&oriAngle<Math.PI/2){
            ring.rotate((oriAngle-Math.PI/2+Math.PI/6)*180/Math.PI,origin);	
        }else if(oriAngle>Math.PI/2&&oriAngle<Math.PI){
            ring.rotate((oriAngle-Math.PI/2-Math.PI/6)*180/Math.PI,origin);	
        }else if(oriAngle>-Math.PI&&oriAngle<-Math.PI/2){
            ring.rotate((oriAngle+Math.PI/2+Math.PI/6)*180/Math.PI,origin);	
        }else if(oriAngle>-Math.PI/2&&oriAngle<0){
            ring.rotate((oriAngle+Math.PI/2-Math.PI/6)*180/Math.PI,origin);
        }
    },
    CLASS_NAME: "OpenLayers.Handler.VerticePolygon"
});

function redrawPolygonByMove(angle,origin,ring,moveRadius,graSize,disAngle){
	var pointstartup, pointStartdown, pointMiddleup1, pointMiddleup2, pointMiddledown,pointMiddledown2, pointEnd;
	pointstartup =ring.components[0];
	pointstartup.x =origin.x+(graSize/2*Math.cos(disAngle));
	pointstartup.y = origin.y+(graSize/2*Math.sin(disAngle));
	pointstartup.clearBounds();
	pointStartdown = ring.components[1];
	pointStartdown.x = origin.x-(graSize/2*Math.cos(disAngle));
	pointStartdown.y = origin.y-(graSize/2*Math.sin(disAngle));
	pointStartdown.clearBounds();
	pointMiddledown = ring.components[2];
	pointMiddledown.x =origin.x+(moveRadius*2/3*Math.cos(angle))-(graSize/2*Math.cos(disAngle));
	pointMiddledown.y = origin.y+(moveRadius *2/3*Math.sin(angle))-(graSize/2*Math.sin(disAngle));
	pointMiddledown.clearBounds();
	pointMiddledown2 = ring.components[3];
	pointMiddledown2.x = origin.x+(moveRadius *2/3*Math.cos(angle))-(graSize/2*3*Math.cos(disAngle));
	pointMiddledown2.y = origin.y+(moveRadius *2/3*Math.sin(angle))-(graSize/2*3*Math.sin(disAngle));
	pointMiddledown.clearBounds();
	pointEnd =ring.components[4];
	pointEnd.x = origin.x+(moveRadius*Math.cos(angle));
	pointEnd.y = origin.y+(moveRadius *Math.sin(angle));
	pointEnd.clearBounds();
	pointMiddleup2 = ring.components[5];
	pointMiddleup2.x =origin.x+(moveRadius*2/3*Math.cos(angle))+(graSize/2*3*Math.cos(disAngle));
	pointMiddleup2.y = origin.y+(moveRadius*2/3*Math.sin(angle))+(graSize/2*3*Math.sin(disAngle));
	pointMiddleup2.clearBounds();
	pointMiddleup1 = ring.components[6];
	pointMiddleup1.x = origin.x+(moveRadius*2/3*Math.cos(angle))+(graSize/2*Math.cos(disAngle));
	pointMiddleup1.y = origin.y+(moveRadius*2/3*Math.sin(angle))+(graSize/2*Math.sin(disAngle));
	pointMiddleup1.clearBounds();
}